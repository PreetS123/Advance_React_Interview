# React + Vite

# Uber Frontend Interview: Overlapping Circles

# Problem Statement
# The circles will have specific behaviors based on user actions such as dragging, clicking, and overlapping. The application should dynamically update the circle's size during a drag operation and detect when two circles overlap, changing the color of the second circle in such cases.

# When left mouse button click:
# - draw a circle size on drag 
# - increase the circle size on drag
# - on mouse leave => the final circle
# - if left clicked without a drag then clear left circle


# When right mouse button click:
# - draw a circle size on drag 
# - increase the circle size on drag
# - on mouse leave => the final circle
# - if right clicked without a drag then clear right circle

# Circle overlap detection:
# initialy both circle should be red
# If circle overlap then second circle should change to blue
# The overlap should be recalculated every time a circle is created or updated.

# Replacing Circles:
# Each time the user draws a circle with the left or right mouse button, the existing circle for that button should be replaces with the new one.

