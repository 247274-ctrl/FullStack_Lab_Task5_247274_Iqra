LAB 05 — THE DOM AND A FORM
Student roll number: 247274
Assigned project: 1 — The Seats (last digit 4; 4 divided by 3 leaves remainder 1)

FILES
- seats.html: page structure and all eight seat buttons
- style.css: responsive page styling
- script.js: one delegated click listener and seat-allocation logic

BEFORE SUBMITTING
1. Open seats.html in a browser and test the examples from the teacher's instructions.
2. The teacher's top-of-lab place/colour table was not included in the text shared here. In seats.html, replace “Your Place” with the place assigned to digit 4. In style.css, update --place-color and --place-color-dark to the assigned colour and a darker shade.
3. Take a real screenshot of the running page showing the project working and insert it into your Word report.
4. Make the Word file named YourName-247274.docx and submit it to Classroom: “Lab 05 — The DOM and a form” by Wednesday 14 October 2026, 16:00.

GIT SETUP
Open a terminal in this folder and run:
  git init
  git add .
  git commit -m "1 The seats — The page"

TOPIC COMMIT MESSAGES
After each topic is complete and tested, make a commit with the exact message:
1. 1 The seats — The page
2. 1 The seats — Eight seats
3. 1 The seats — One listener
4. 1 The seats — A block of seats
5. 1 The seats — More seats
6. 1 The seats — Stand up
7. 1 The seats — An empty name
8. 1 The seats — The sentence in the file

Suggested workflow for each later topic:
  git add .
  git commit -m "PASTE THE NEXT EXACT MESSAGE HERE"

TEST CHECKLIST
- Initial state: seats 1–8 show their numbers; Free seats = 8.
- Name Ali, count 3, click seat 1: seats 1–3 show Ali; Free seats = 5.
- Name Ali, count 2, click seat 6: seats 6–7 show Ali; Free seats = 3.
- Name Bea, count 3, click seat 6: no change; Free seats stays 3.
- Name Ali, count “nine”, click seat 4: browser validation says “not a number”; seat 4 remains 4.
- Click seat 2: only seat 2 becomes free; seats 1 and 3 still show Ali; Free seats = 4.
- Clear the name and click an empty seat: no seat changes and status says “undefined”.
- Refresh: all seats return to numbers; Free seats = 8 and the original status sentence returns.

Note: The page is a working implementation of Project 1. The place name and exact colour need to be set from the separate digit-to-place table mentioned by the teacher, which was not present in the pasted task text.
