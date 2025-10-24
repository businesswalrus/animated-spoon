# Seven Deadly Sins Ratings - Google Sheets Setup

This guide will help you set up Google Sheets to collect ratings from the `/7deadlysins-rate` page.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "7 Deadly Sins Ratings" (or whatever you prefer)

## Step 2: Set Up Column Headers (EASY METHOD)

**Option A - Import the CSV Template (Recommended):**

1. In your new Google Sheet, go to **File** → **Import**
2. Click **Upload** tab
3. Upload the file `ratings_sheet_template.csv` from this project
4. Choose **Replace spreadsheet** (or **Insert new sheet**)
5. Click **Import data**

Done! All 114 column headers are now set up automatically.

**Option B - Manual Setup (if you prefer):**

The CSV template includes these headers:
- Timestamp
- Voter Name
- For each person (Barnes, Raph, Buddy, Pup, Lucas, Gentleman Gaga, AB, Mike, Galvin, Stephen, Ham, Bob, Matt, Jake):
  - [Name]-pride, [Name]-greed, [Name]-lust, [Name]-envy, [Name]-gluttony, [Name]-wrath, [Name]-sloth, [Name]-comment

**Total:** 114 columns (2 + 14 people × 8 fields each)

## Step 3: Create the Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any default code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Prepare row data
    const row = [
      data.timestamp || new Date().toISOString(),
      data.voterName || 'Anonymous'
    ];

    // List of people in order
    const people = ['Barnes', 'Raph', 'Buddy', 'Pup', 'Lucas', 'Gentleman Gaga', 'AB', 'Mike', 'Galvin', 'Stephen', 'Ham', 'Bob', 'Matt', 'Jake'];
    const sins = ['pride', 'greed', 'lust', 'envy', 'gluttony', 'wrath', 'sloth'];

    // Add ratings and comments for each person
    people.forEach(person => {
      sins.forEach(sin => {
        const key = `${person}-${sin}`;
        row.push(data[key] || '');
      });
      // Add comment
      const commentKey = `${person}-comment`;
      row.push(data[commentKey] || '');
    });

    // Append to sheet
    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({
      result: 'success',
      row: sheet.getLastRow()
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      result: 'error',
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click the **Save** icon (disk icon)
5. Name your project (e.g., "7 Deadly Sins Webhook")

## Step 4: Deploy the Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Select **Web app**
4. Configure:
   - **Description**: "Ratings webhook" (or anything you want)
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. Click **Authorize access** and grant permissions
7. **Copy the Web app URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycbz.../exec
   ```

## Step 5: Update the Astro Page

1. Open `/src/pages/7deadlysins-rate.astro`
2. Find line ~310 where it says:
   ```javascript
   const WEBHOOK_URL = 'YOUR_GOOGLE_SHEETS_WEBHOOK_URL_HERE';
   ```
3. Replace with your actual webhook URL:
   ```javascript
   const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbz.../exec';
   ```
4. Save the file

## Step 6: Test It Out

1. Run your dev server: `npm run dev`
2. Visit `http://localhost:4321/7deadlysins-rate`
3. Fill out some ratings and submit
4. Check your Google Sheet - you should see a new row with the data!

## Troubleshooting

### Submissions not showing up?
- Check that you deployed the Apps Script as "Anyone" access
- Make sure you copied the full webhook URL ending in `/exec`
- Check the Apps Script logs: In Apps Script editor, go to Executions to see error logs

### Column headers don't match?
- Make sure the people array in the Apps Script matches the order in the form
- Double-check that field names match between the HTML form and Apps Script

### CORS errors?
- The form uses `mode: 'no-cors'` which should work fine
- You won't get detailed error responses, but submissions should still work

## Analyzing the Data

Once you have submissions, you can:
- Calculate average ratings per person
- See which sins people rate highest/lowest
- Read all the comments
- Create charts/graphs of the data

### Quick Analysis Formulas:

To get average rating for Barnes' Pride (assuming data starts in row 2):
```
=AVERAGE(C2:C)
```

To count total submissions:
```
=COUNTA(A2:A)
```

To see who submitted the most extreme ratings:
```
=MAX(C2:C)  // Highest rating
=MIN(C2:C)  // Lowest rating
```

## Next Steps

- Share the `/7deadlysins-rate` URL with your friends
- Watch the ratings roll in
- Analyze to see if people agree with the original rankings!
- Create a summary page showing aggregated results (optional future enhancement)
