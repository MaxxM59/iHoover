To launch the app, cd into the main folder and type : ng serve -o

The app will automatically open in your default browser. The application is running one component
and one service.

Once the application is started, the user will get a form with 5 required fields :

-   Area width (2 to 25 as of now)
-   Area Height (2 to 25 as of now)
-   Intial Horizontal Position (0 to select value in Area width )
-   Intial Vertical Position (0 to select value in Area height )
-   Initial Direction (North, South, West, East)

Now the launch button will appear under the form. Once the user clicks this button, it will call the
launcher() function defined in app.component.ts

The launcher() function :

-   1. set booleans that will modify front end display :
    -   isUntouched : if the form has been sent
    -   isLoading : spinner while the function isn't done
    -   isOver : when the function is over
-   2. retrieve datas from the form
-   3. call the launchHoover() function from the launch service
-   4. once the function finished the tasks, a card will appear under the form displaying :
    -   the final location coords
    -   final orientation
    -   path used with every area coords
