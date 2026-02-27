function doPost(e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        const doc = SpreadsheetApp.getActiveSpreadsheet();
        const masterSheetName = 'Registrations_2026';
        let masterSheet = doc.getSheetByName(masterSheetName);

        const headers = [
            'Timestamp',
            'Event',
            'Team Name',
            'Role',
            'Name',
            'Email',
            'Phone',
            'College',
            'Department',
            'Roll No',
            'Year',
            'Student Type',
            'Total Team Fee'
        ];

        if (!masterSheet) {
            masterSheet = doc.insertSheet(masterSheetName);
            masterSheet.appendRow(headers);
        }

        const data = JSON.parse(e.postData.contents);
        const timestamp = new Date();

        // Process each member
        data.members.forEach((member, index) => {
            const rowData = [
                timestamp,
                data.eventSelected,
                data.teamName || 'N/A',
                member.role,
                member.name,
                member.email,
                member.phone,
                member.college,
                member.department,
                member.rollNo,
                member.year,
                member.isMcet ? 'Internal (MCET)' : 'External',
                index === 0 ? data.totalPrice : '' // Only show total fee on Lead row
            ];

            // 1. Append to Master Sheet
            masterSheet.appendRow(rowData);

            // 2. Append to Event-Specific Sheet
            let eventSheet = doc.getSheetByName(data.eventSelected);
            if (!eventSheet) {
                eventSheet = doc.insertSheet(data.eventSelected);
                eventSheet.appendRow(headers);
            }
            eventSheet.appendRow(rowData);
        });

        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'success' }))
            .setMimeType(ContentService.MimeType.JSON);
    }

    catch (err) {
        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'error', 'error': err.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }

    finally {
        lock.releaseLock();
    }
}
