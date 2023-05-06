1. ( ) Has 4 routes 
    - ( )route - 1
        - (x) Has Head Text ('How are you feeling today?')
        - (x) Has a small text above the input saying ('Feeling?')
        - ( ) Input that just takes Number (1-5)
        - (x) Next button for the next Page

    - ( )route - 2
        - (x) Has Head Text ('How well are you understanding the content?')
        - (x) Has a small text above the input saying ('Understanding?')
        - ( ) Input that just takes Number (1-5)
        - (x) Next button for the next Page

    - ( )route - 3
        - (x) Has Head Text ('How well are you being supported?')
        - (x) Has a small text above the input saying ('Support?')
        - ( ) Input that just takes Number (1-5)
        - (x) Next button for the next Page

    - (x)route - 4
        - (x) Has Head Text ('Any Comments you want to leave?')
        - (x) Has a small text above the input saying ('Comments')
        - (x) Input that just takes text
        - (x) Next button for the next Page
    
2. (x) Alerts (Route 4 does not need Alerts)
    - (x)route - 1
         - for user who presses Next without filling Input
    - (x)route - 2
        - for user who presses Next without filling Input
    - (x)route - 3
        - for user who presses Next without filling Input
    
3. ( ) Review 
    - ( )route - 5
        - (x) Has Head Text ('Your Feedback')
        - (x) Has ('Feelings'): (input from Route 1 )
        - (x) Has ('Understanding'): ( input from Route 2 )
        - (x) Has ('Support'): ( input from Route 3 )
        - (x) Has ('Comments'): ( input from Route 4 )
        - ( ) Submit Button
            -  Save all info into the database 

4. ( ) Submit Feedback

    - ( )route - 6
        - ( ) Have a box saying ('⭐️ Feedback Received!')
        - ( ) Have a box 
            - ( ) Have a text that say ('Thank You')
            - ( ) A Button 
                - ( ) Button says ( 'Leave New Feedback' )
                - ( ) Reset All Data 
                - ( ) Go to Route 1


Actual Coding 

- Make Routes in App.js
    - Comment Out Routes till they are ready
- Make Component for Route 1 
    - Export to App - (DONE)
    - Make Text for DOM - (DONE)
    - Input for DOM (limit Number to 5)
    - Make a dispatch to Reducer for the data from Input - (DONE)
    - Make next page and use history  - (DONE)
        - Make alert if there is no Input - (DONE)
- Make Component for Route 2 
    - Export to App - (DONE)
    - Make Text for DOM - (DONE)
    - Input for DOM (limit Number to 5)
    - Make a dispatch to Reducer for the data from Input - (DONE)
    - Make next page and use history  - (DONE)
        - Make alert if there is no Input - (DONE)
- Make Component for Route 3
    - Export to App  - (DONE)
    - Make Text for DOM - (DONE)
    - Input for DOM (limit Number to 5) 
    - Make a dispatch to Reducer for the data from Input  - (DONE)
    - Make next page and use history  - (DONE)
        - Make alert if there is no Input  - (DONE)
- Make Component for Route 4 
    - Export to App - (DONE)
    - Make Text for DOM  - (DONE)
    - Input for DOM  - (DONE)
    - Make a dispatch to Reducer for the data from Input - (DONE)
    - Make next page and use history - (DONE)
- Make the Review Component
    - Export to App  - (DONE)
    - User should not be able to change anything on here  - (DONE)
    - useSelector to get the value of all the 4 routes  - (DONE)
    - Make Text for DOM  - (DONE)
    - display in the DOM in this Format for Route 1 - 4  - (DONE)
        - ('Feelings'): (input from Route 1)  - (DONE)
- Make Submit Button
        - use axios Post to send the Info to the Server and the Database
- Make Feedback Component 
    - Export to App 
    - Make 2 boxes
        - 1st box with some Text
        - 2nd box 
            - text
            - button 
                - Reset all the data in the data in the reducer - I think
                - go back to Route 1 

    