(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={filter:"Filter_filter__1Bnh9",filterInput:"Filter_filterInput__3hvWO"}},12:function(t,e,n){t.exports={title:"App_title__mABQf"}},2:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__LXEPC",contactFormName:"ContactForm_contactFormName__34oTs",contactFormNameInput:"ContactForm_contactFormNameInput__2s-P6",contactFormNumber:"ContactForm_contactFormNumber__1bkwu",contactFormNumInput:"ContactForm_contactFormNumInput__2erPs",contactFormBtn:"ContactForm_contactFormBtn__pCBCd"}},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(13),o=n.n(c),r=n(3),s=n(10),i=n(14),m=n(5),u=n(6),l=n(8),d=n(7),b=n(23),h=n(4),j=n.n(h),f=n(0),C=function(t){var e=t.findContact,n=t.removeContact;return Object(f.jsx)("ul",{children:e.map((function(t){return Object(f.jsxs)("li",{className:j.a.contactListItem,children:[Object(f.jsxs)("span",{className:j.a.contactListName,children:[t.name,":"]}),"\xa0",Object(f.jsx)("span",{className:j.a.contactListNumber,children:t.number}),Object(f.jsx)("button",{className:j.a.contactListItemBtn,type:"button",id:t.id,onClick:n,children:"Delete"})]},t.id)}))})},p=n(2),_=n.n(p),N=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.reset=function(){t.setState({name:"",number:""})},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(r.a)({},a,c))},t.handleSubmit=function(e){if(e.preventDefault(),t.props.isThereContact(t.state.name))return alert("".concat(t.state.name," has been already in contact list"));t.props.addNewContact(t.state),t.reset()},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:_.a.contactForm,onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{className:_.a.contactFormName,children:["Name:",Object(f.jsx)("input",{className:_.a.contactFormNameInput,onChange:this.handleChange,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsxs)("label",{className:_.a.contactFormNumber,children:["Number:",Object(f.jsx)("input",{className:_.a.contactFormNumInput,onChange:this.handleChange,type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(f.jsx)("button",{className:_.a.contactFormBtn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=N,F=n(11),x=n.n(F),v=function(t){var e=t.onChange,n=t.filter;return Object(f.jsxs)("label",{className:x.a.filter,children:["Find contacts by name:",Object(f.jsx)("input",{className:x.a.filterInput,name:"filter",type:"text",value:n,onChange:e})]})},g=n(12),L=n.n(g),I=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addNewContact=function(e){t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[Object(s.a)(Object(s.a)({},e),{},{id:Object(b.a)()})])}}))},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(r.a)({},a,c))},t.removeContact=function(e){var n=e.target.id;t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n})),filter:""}}))},t.findContact=function(e){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t.isThereContact=function(e){return t.state.contacts.some((function(t){return t.name.toLowerCase()===e.toLowerCase()}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:L.a.title,children:"Phonebook"}),Object(f.jsx)(O,{addNewContact:this.addNewContact,isThereContact:this.isThereContact}),Object(f.jsx)("h2",{className:L.a.title,children:"Contacts"}),Object(f.jsx)(v,{filter:this.state.filter,onChange:this.handleChange}),Object(f.jsx)(C,{findContact:this.findContact(),removeContact:this.removeContact})]})}}]),n}(a.Component),w=I;n(20);o.a.render(Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(w,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={contactListItem:"ContactList_contactListItem__57qdd",contactListName:"ContactList_contactListName__2iPW4",contactListNumber:"ContactList_contactListNumber__3hlJj",contactListItemBtn:"ContactList_contactListItemBtn__2fZKs"}}},[[21,1,2]]]);
//# sourceMappingURL=main.37276f32.chunk.js.map