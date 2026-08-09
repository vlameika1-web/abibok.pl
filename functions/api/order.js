const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});
const clean=value=>String(value||'').trim().slice(0,2000);
export async function onRequestPost({request,env}){
 if(!env.TELEGRAM_BOT_TOKEN||!env.TELEGRAM_CHAT_ID)return json({ok:false,error:'Service not configured'},503);
 const type=request.headers.get('content-type')||'';if(!type.includes('multipart/form-data'))return json({ok:false,error:'Invalid content type'},415);
 const data=await request.formData(),task=clean(data.get('task')),phone=clean(data.get('phone'));if(!task||!phone)return json({ok:false,error:'Missing required fields'},400);
 const text=['🏠 Nowe zgłoszenie ABIBOK','', 'Imię: '+clean(data.get('name')),'Telefon: '+phone,'E-mail: '+clean(data.get('email')),'Adres: '+clean(data.get('address')),'Termin: '+clean(data.get('when'))+' '+clean(data.get('when-text')),'Usługa: '+clean(data.get('service')),'','Opis:',''+task].join('\n');
 const api='https://api.telegram.org/bot'+env.TELEGRAM_BOT_TOKEN;
 const sent=await fetch(api+'/sendMessage',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({chat_id:env.TELEGRAM_CHAT_ID,text})});
 if(!sent.ok)return json({ok:false,error:'Telegram delivery failed'},502);
 const photos=data.getAll('photos').filter(file=>file&&typeof file.arrayBuffer==='function'&&file.size>0).slice(0,5);
 for(const photo of photos){if(photo.size>10*1024*1024)continue;const body=new FormData();body.set('chat_id',env.TELEGRAM_CHAT_ID);body.set('photo',photo,photo.name||'photo.jpg');await fetch(api+'/sendPhoto',{method:'POST',body})}
 return json({ok:true});
}
export function onRequestGet(){return json({ok:false,error:'Method not allowed'},405)}
