# React + Vite


# Problem Statement
# Build a Virtual DOM to actual HTML DOM converter | DOM Renderer
# In this question, the candidate needs to build a utility renderToDOM that will convert a given Virtual DOM object into actual HTML DOM elements. The final DOM tree should be rendered on the screen

# Example 
# const virtualNode = {
#      type:"div",
#      props:{
#        class:"heading-container",
#        children:{
#            0:"This is",
#            1:{
#                type:"h1",
#                props:{
#                    key: "10",
#                    id:"heading",
#                    children:"devtools.tech",
#                },
#            },
#            2:{
#                type:"h2",
#                props:{
#                    id:"heading",
#                    children:"is Awesome!!",
#                },
#            },
#           3:{
#               type:"input",
#               props:{
#                      type:"text",
#                       value:"Devtools Tech",
#                     },
#             },
#            4:{
#               type:"button",
#               props:{
#                      children:"Click",
#                     },
#             },
#            5:0,
#            6:{
#               props:{
#               children:{
#               0:{
#                      type:"div",
#                       props:{
#                           children:"React",
#                            }
#                     },
#               1:{
#                      type:"div",
#                       props:{
#                           children:"Fragment",
#                            }
#                     },
#                     },
#                     },
#             },
#       }
#      }
# }

