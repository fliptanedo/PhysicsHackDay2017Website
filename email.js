/*	
	email.js 
	by flip.tanedo@ucr.edu
*/


function eMailUCR(ucrid)
{
var emailE=(ucrid + '@' + 'ucr' + '.edu')
document.write('<a href="mailto:' + emailE + '">' + emailE + '</a>')
}

function eMailUCR_name(ucrid, name)
{
var emailE=(ucrid + '@' + 'ucr' + '.edu')
document.write('<a href="mailto:' + emailE + '">' + name + '</a>')
}

function eMailUCRemail(ucrid)
{
var emailE=(ucrid + '@' + 'email.ucr' + '.edu')
document.write('<a href="mailto:' + emailE + '">' + emailE+ '</a>')
}

function eMailUCRemail_name(ucrid, name)
{
var emailE=(ucrid + '@' + 'email.ucr' + '.edu')
document.write('<a href="mailto:' + emailE + '">' + name + '</a>')
}


function eMailgen(preat, postat)
{
var emailE=(preat + '@' + postat)
document.write('<a href="mailto:' + emailE + '">' + emailE + '</a>')
}