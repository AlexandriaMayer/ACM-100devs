In my urban fantasy version of Austin, there's a large business district in Westlake Hills on the site of a former quary. 
My worldbuilding excuse is "concentrate all the offices along 360 into one transit oriented development".
But I should know how much square footage there is to pull from the real world baseline.
So the workflox I imagine involves the following datasets:

A zoning map

A polyline along 360

A planimetrics dataset

Take the polyline and create a buffer - half mile, one mile, whatever suitable. Maybe break the buffer in two along a suitable dividing line ie the Colorado River.

Select the zoning types that allow offices and commercial, export to a new shapefile.

Spatially select the exported zoning shapefile with the buffer. Export the selection as new shapefile.

Take the planimetrics polygon and select the structures. Export the selection as a new shapefile.

Select the structures that fall within the near-360 office and commercial zones.

If there isn't a square footage field, create one and use calculate geometry to get the square footage.

Sum square footage.
