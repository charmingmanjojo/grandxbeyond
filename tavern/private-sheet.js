/* Private character details: only used after owner/Admin-authorized Supabase reads. */
(function(){
  const types=['Enhancer','Transmuter','Conjurer','Specialist','Manipulator','Emitter'];
  const colors=['#168f24','#b500b5','#d81c39','#009ed0','#888','#b89800'];
  const point=(i,r)=>[270+Math.sin(i*Math.PI/3)*r,225-Math.cos(i*Math.PI/3)*r];
  const xy=p=>p.map(n=>n.toFixed(2)).join(',');
  window.renderHunterPrivateSheet=function(pane,sections){
    pane.replaceChildren();
    if(!Object.keys(sections).length)return;
    const header=document.createElement('h3');header.textContent='Private character sheet';pane.appendChild(header);
    const note=document.createElement('p');note.textContent='Visible to this character’s owner and Admin+. Edit with /sheet in Discord. Wheel percentages show your build allocation; natural affinity is separate.';pane.appendChild(note);
    for(const [section,values] of Object.entries(sections)){
      if(!values||typeof values!=='object')continue;
      const title=document.createElement('h4');title.textContent=section[0].toUpperCase()+section.slice(1);pane.appendChild(title);
      if(section==='nen'&&types.includes(values.category)){
        const figure=document.createElement('div');figure.innerHTML=window.wheelSVG(values.category,values.points||{});pane.appendChild(figure);
        const toggle=document.createElement('button');toggle.type='button';toggle.textContent='Show natural affinity';let natural=false;toggle.addEventListener('click',()=>{natural=!natural;figure.innerHTML=window.wheelSVG(values.category,values.points||{},natural?'affinity':'allocation');toggle.textContent=natural?'Show build allocation':'Show natural affinity';});pane.appendChild(toggle);
      }
      const dl=document.createElement('dl');pane.appendChild(dl);
      for(const [key,value] of Object.entries(values)){
        const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=key.replaceAll('_',' ');
        dd.textContent=key==='points'&&typeof value==='object'?types.map(t=>t+': '+(Number(value?.[t])||0)+'%').join(' · '):String(value??'—');
        dd.style.whiteSpace='pre-wrap';dd.style.overflowWrap='anywhere';dl.append(dt,dd);
      }
    }
  };
})();
