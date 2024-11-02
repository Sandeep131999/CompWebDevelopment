--------------------EJS Tags ----------------------------

<%=variable %>                                                   JS Output
<% console.log("hello") %>                                       JS Execute
<%- <h1>hello</h1>%>                                             Render HTML
<%% %%>                                                          show <% or %>
<%# This is a comment>                                           stop execution
<%- include("header.ejs")%>                                      insert another ejs file