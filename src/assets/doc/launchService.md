The launch service will handle all the logic to define wich path the hoover will use.

On every move,we will save Variables in an array of arrays doneAreas and in the currentLocation
object.

Variables :

-   square: {
    -   xSquare: area width;
    -   ySquare: area height }
-   currentLocation: {
    -   xCurrent: current horizontal position
    -   yCurrent: current vertical position
    -   currentDirection: current direction (North,East,West,South) }
-   finalLocation: same type as currentLocation
-   currentOrientation : used to turn right, left or go forward (D,G,A)
-   doneAreas : Array used to display the datas on frontend

what the launchHoover() function does:

-   1. the function will start dividing the area in 4 sub areas with a switch statement:
    -   North East (NE) : check the North East case picture
    -   North West (NW) : check the North West case picture
    -   South East (SE) : check the South East case picture
    -   South West (SW) : check the South West case picture
-   2.  the hoover will start its path by (considering subarea) :
    -   go to the xSquare-1 column (case NE and SE)
    -   or go to the column 1 (case NW and SW)
-   3. then (considering subarea):
    -   Go to the highest line ( NE and NW)
    -   or go to line 0 (SE and SW)
-   4. turn to reach the :
    -   top-left area (case NE)
    -   top-right area (case )
    -   bottom-right area (case SE)
    -   bottom-left area (case SW)
-   5. now the hoover will loop going up/down over every remaining column until:
    -   colummn 1 (case NE and SE )
    -   column xSquare -1 (case NW and SW)
-   6. handling the last turn and doing the last column
-   setting the finalLocation (coords and direction)
