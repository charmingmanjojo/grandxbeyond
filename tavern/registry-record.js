(function(){
 window.renderRegistryRecord=async function(sb,pane,id){
  pane.dataset.record=id;pane.textContent='Loading record…';
  const res=await sb.rpc('get_character_record',{character_uuid:id});
  if(pane.dataset.record!==id)return;
  if(res.error){pane.textContent='Could not load record: '+res.error.message;return;}
  const data=res.data;pane.replaceChildren();
  function section(title,fields){const box=document.createElement('section'),h=document.createElement('h3'),dl=document.createElement('dl');h.textContent='['+title+']';box.append(h,dl);pane.appendChild(box);for(const [key,val] of fields){const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=key;dd.textContent=val===undefined||val===null||val===''?'Not recorded':String(val);dd.style.whiteSpace='pre-wrap';dd.style.overflowWrap='anywhere';dl.append(dt,dd);}return box;}
  const p=data.public||{},h=data.hunter||{};
  const publicBox=section('PUBLIC × RECORD',[['Name',p.name],['Nationality',p.nationality],['Expeditions Completed',p.expeditions_completed],['Hunter Status',p.hunter_status]]);
  let portrait=p.portrait_url;
  if(p.portrait_path){const signed=await sb.storage.from('hunter-faceclaims').createSignedUrl(p.portrait_path,900);portrait=signed.data?.signedUrl;}
  if(pane.dataset.record!==id)return;
  if(/^https:\/\//.test(portrait||'')){const img=document.createElement('img');img.src=portrait;img.alt='Portrait of '+(p.name||'character');img.style.cssText='max-width:180px;width:100%;height:auto;border-radius:4px';publicBox.appendChild(img);}
  else {const msg=document.createElement('p');msg.textContent='Portrait: not recorded';publicBox.appendChild(msg);}
  const hunterFields=[['Specialization',h.specialization],['Star Rank',['Unstarred','Single-Star','Double-Star','Triple-Star'][h.star_rank||0]],['Notable Accomplishments',h.notable_accomplishments]];
  if(Object.hasOwn(data,'license_number'))hunterFields.unshift(['License #',data.license_number||'Not issued'],['License Status',data.license_status]);
  section('HUNTER × RECORD',hunterFields);
  if(Object.hasOwn(data,'hacker')){const x=data.hacker||{};section('HACKER × RECORD',[['Current Location',x.current_location],['Location last synchronized',x.location_synced_at],['Nen Type',x.recorded_nen_type],['Recorded Hatsu Information',x.recorded_hatsu]]);}
  if(data.staff)section('STAFF × RECORD',[['Full Hatsu Information',data.staff.full_hatsu?Object.entries(data.staff.full_hatsu).map(([k,v])=>k+': '+v).join('\n'):null],['Internal Notes',data.staff.internal_notes]]);
 };
})();
