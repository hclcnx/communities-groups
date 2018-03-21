////
// @author Tony McGuckin, IBM
// @name Profiles Customization
// @version 0.1
// @date February, 2017
//
if(typeof(dojo) != "undefined") {
	
	function addGroupsLink () {
	
		
		var addGroups = '<tr class="lotusFormFieldRow"> '+
							'<td width="130px" class="lotusFormLabel" style="padding-top: 10px;">Groupes :</td>' +
							'<td>' +
								'<table class="lotusTable" style="width: 650px;" cellpadding="0" cellspacing="0" border="0" role="presentation">' +
									'<tbody>' +
										'<tr><td><a href="http://www.google.fr">Gérer les groupes</a></td></tr>' +
									'</tbody>' +
								'</table>' +
							'</td>' +
							'<td width="50px" class="lotusFormLabel"/>' +
						'</tr>';
		if (dojo.query("#addAllParentMembersRow") && dojo.query("#addAllParentMembersRow")[0]) {
			dojo.place(addGroups,	dojo.query("#addAllParentMembersRow")[0],"before")
		}
		
	}
	
	require(["dojo/aspect","dojo/domReady!"], function(aspect) { 
		aspect.after(_Members_iContext.iScope(),"displayMemberCreateForm", addGroupsLink(), true) 
	});
}
