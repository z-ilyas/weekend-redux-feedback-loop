1. ( ) Has 4 routes 
    - ( )route - 1
        - ( ) Has Head Text ('How are you feeling today?')
        - ( ) Has a small text above the input saying ('Feeling?')
        - ( ) Input that just takes Number (1-5)
        - ( ) Next button for the next Page

    - ( )route - 2
        - ( ) Has Head Text ('How well are you understanding the content?')
        - ( ) Has a small text above the input saying ('Understanding?')
        - ( ) Input that just takes Number (1-5)
        - ( ) Next button for the next Page

    - ( )route - 3
        - ( ) Has Head Text ('How well are you being supported?')
        - ( ) Has a small text above the input saying ('Support?')
        - ( ) Input that just takes Number (1-5)
        - ( ) Next button for the next Page

    - ( )route - 4
        - ( ) Has Head Text ('Any Comments you want to leave?')
        - ( ) Has a small text above the input saying ('Comments')
        - ( ) Input that just takes text
        - ( ) Next button for the next Page
    
2. ( ) Alerts (Route 4 does not need Alerts)
    - ( )route - 1
         - for user who presses Next without filling Input
    - ( )route - 2
        - for user who presses Next without filling Input
    - ( )route - 3
        - for user who presses Next without filling Input
    
3. ( ) Review 
    - ( )route - 5
        - ( ) Has Head Text ('Your Feedback')
        - ( ) Has ('Feelings'): (input from Route 1 )
        - ( ) Has ('Understanding'): ( input from Route 2 )
        - ( ) Has ('Support'): ( input from Route 3 )
        - ( ) Has ('Comments'): ( input from Route 4 )
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
    - Export to App 
    - Make Text for DOM
    - Input for DOM (limit Number to 5)
    - Make a dispatch to Reducer for the data from Input
    - Make next page and use history 
        - Make alert if there is no Input
- Make Component for Route 2 
    - Export to App 
    - Make Text for DOM
    - Input for DOM (limit Number to 5)
    - Make a dispatch to Reducer for the data from Input
    - Make next page and use history 
        - Make alert if there is no Input
- Make Component for Route 3
    - Export to App 
    - Make Text for DOM
    - Input for DOM (limit Number to 5)
    - Make a dispatch to Reducer for the data from Input
    - Make next page and use history 
        - Make alert if there is no Input
- Make Component for Route 4 
    - Export to App 
    - Make Text for DOM 
    - Input for DOM 
    - Make a dispatch to Reducer for the data from Input
    - Make next page and use history 
- Make the Review Component
    <!-- - Export to App  --> 
    - User should not be able to change anything on here
    - useSelector to get the value of all the 4 routes
    - Make Text for DOM
    - display in the DOM in this Format for Route 1 - 4 
        - ('Feelings'): (input from Route 1)
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

    