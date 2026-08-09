const translations={
en:{
'Usługi':'Services','Jak to działa':'How it works','Ceny':'Prices','O nas':'About us','Kontakt':'Contact','Zamów usługę':'Book a service',
'Usługi domowe · Warszawa':'Home services · Warsaw','Domowe naprawy bez stresu.':'Home repairs without stress.','ABIBOK zajmie się domowymi sprawami, a Ty zachowasz czas na to, co naprawdę ważne.':'ABIBOK takes care of your home tasks, so you keep time for what truly matters.','Zadzwoń':'Call us','Warszawa':'Warsaw','Jasne zasady':'Clear terms','Wizyta od 300 zł':'Visit from PLN 300',
'W czym możemy Ci pomóc?':'How can we help?','Usługi domowe':'Home services','Montaż i mocowanie':'Installation and mounting','Drobne naprawy domowe':'Minor home repairs','Meble':'Furniture','Hydraulika':'Plumbing','Elektryka':'Electrical','Łazienka i kuchnia':'Bathroom and kitchen','Zobacz wszystkie usługi →':'See all services →','Opisz, czego potrzebujesz':'Tell us what you need',
'Twój czas.':'Your time.','Twój spokój.':'Your peace of mind.','Prosty kontakt':'Easy contact','Termin, który Ci odpowiada':'A time that works for you','Jedna wizyta. Wiele drobnych spraw.':'One visit. Many small jobs.','Jak to działa?':'How does it work?','Opisz, czego potrzebujesz':'Tell us what you need','Ustalamy szczegóły':'We agree the details','ABIBOK przyjeżdża':'ABIBOK arrives','Gotowe':'Done','Ile to kosztuje?':'How much does it cost?','Nasza obietnica':'Our promise','Najczęściej zadawane pytania':'Frequently asked questions','Masz coś do zrobienia w domu?':'Something to do at home?','Nie odkładaj tego na później.':'Do not put it off.',
'Jeden serwis. Wiele domowych spraw.':'One service. Many home tasks.','Znajdź swój obszar':'Find your service area','O ABIBOK':'About ABIBOK','Jeden serwis.\nWiele domowych spraw.':'One service.\nMany home tasks.',
'Potrzebujesz pomocy w domu? Skontaktuj się z nami w najwygodniejszy dla Ciebie sposób.':'Need help at home? Contact us in the way that suits you best.','Telefon':'Phone','Godziny kontaktu':'Contact hours','Gdzie działamy?':'Where do we work?',
'Bez konta. Bez długiej ankiety.':'No account. No long form.','Co trzeba zrobić?':'What needs to be done?','Dodaj zdjęcia':'Add photos','Gdzie?':'Where?','Kiedy?':'When?','Jak najszybciej':'As soon as possible','Mam preferowany termin':'I have a preferred date','Termin do ustalenia':'Date to be agreed','Imię':'Name','E-mail — opcjonalnie':'Email — optional','Wyślij zgłoszenie':'Send request','Dziękujemy.':'Thank you.','Twoje zgłoszenie zostało wysłane.':'Your request has been sent.','Wolisz porozmawiać?':'Prefer to talk?'
},
ru:{
'Usługi':'Услуги','Jak to działa':'Как это работает','Ceny':'Цены','O nas':'О нас','Kontakt':'Контакты','Zamów usługę':'Заказать услугу',
'Usługi domowe · Warszawa':'Домашние услуги · Варшава','Domowe naprawy bez stresu.':'Домашний ремонт без стресса.','ABIBOK zajmie się domowymi sprawami, a Ty zachowasz czas na to, co naprawdę ważne.':'ABIBOK займётся домашними делами, а у вас останется время на действительно важное.','Zadzwoń':'Позвонить','Warszawa':'Варшава','Jasne zasady':'Понятные условия','Wizyta od 300 zł':'Выезд от 300 zł',
'W czym możemy Ci pomóc?':'Чем мы можем помочь?','Usługi domowe':'Домашние услуги','Montaż i mocowanie':'Монтаж и крепление','Drobne naprawy domowe':'Мелкий домашний ремонт','Meble':'Мебель','Hydraulika':'Сантехника','Elektryka':'Электрика','Łazienka i kuchnia':'Ванная и кухня','Zobacz wszystkie usługi →':'Все услуги →','Opisz, czego potrzebujesz':'Опишите, что вам нужно',
'Twój czas.':'Ваше время.','Twój spokój.':'Ваше спокойствие.','Prosty kontakt':'Простая связь','Termin, który Ci odpowiada':'Удобное для вас время','Jedna wizyta. Wiele drobnych spraw.':'Один визит. Много мелких дел.','Jak to działa?':'Как это работает?','Ustalamy szczegóły':'Согласуем детали','ABIBOK przyjeżdża':'ABIBOK приезжает','Gotowe':'Готово','Ile to kosztuje?':'Сколько это стоит?','Nasza obietnica':'Наше обещание','Najczęściej zadawane pytania':'Частые вопросы','Masz coś do zrobienia w domu?':'Есть дела по дому?','Nie odkładaj tego na później.':'Не откладывайте на потом.',
'Jeden serwis. Wiele domowych spraw.':'Один сервис. Много домашних дел.','Znajdź swój obszar':'Выберите категорию','O ABIBOK':'Об ABIBOK','Jeden serwis.\nWiele domowych spraw.':'Один сервис.\nМного домашних дел.',
'Potrzebujesz pomocy w domu? Skontaktuj się z nami w najwygodniejszy dla Ciebie sposób.':'Нужна помощь по дому? Свяжитесь с нами удобным способом.','Telefon':'Телефон','Godziny kontaktu':'Время работы','Gdzie działamy?':'Где мы работаем?',
'Bez konta. Bez długiej ankiety.':'Без аккаунта и длинной анкеты.','Co trzeba zrobić?':'Что нужно сделать?','Dodaj zdjęcia':'Добавить фото','Gdzie?':'Где?','Kiedy?':'Когда?','Jak najszybciej':'Как можно скорее','Mam preferowany termin':'Есть удобная дата','Termin do ustalenia':'Дату согласуем','Imię':'Имя','E-mail — opcjonalnie':'Email — необязательно','Wyślij zgłoszenie':'Отправить заявку','Dziękujemy.':'Спасибо.','Twoje zgłoszenie zostało wysłane.':'Ваша заявка отправлена.','Wolisz porozmawiać?':'Предпочитаете поговорить?'
}};
const originalText=new WeakMap();
function setLanguage(lang){
 if(!['pl','en','ru'].includes(lang))lang='pl';
 document.documentElement.lang=lang;localStorage.setItem('abibok-lang',lang);
 document.querySelectorAll('body *').forEach(el=>{
  if(el.children.length||['SCRIPT','STYLE'].includes(el.tagName))return;
  if(!originalText.has(el))originalText.set(el,el.textContent);
  const source=originalText.get(el),key=source.trim();
  if(lang==='pl'){el.textContent=source;return}
  if(translations[lang]?.[key])el.textContent=source.replace(key,translations[lang][key]);
 });
 document.querySelectorAll('[data-lang]').forEach(b=>{b.classList.toggle('active',b.dataset.lang===lang);b.setAttribute('aria-pressed',String(b.dataset.lang===lang))});
 const url=new URL(location.href);if(lang==='pl')url.searchParams.delete('lang');else url.searchParams.set('lang',lang);history.replaceState({},'',url);
}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
const requestedLanguage=new URLSearchParams(location.search).get('lang')||localStorage.getItem('abibok-lang')||'pl';setLanguage(requestedLanguage);
const header=document.querySelector('.site-header'),toggle=document.querySelector('.mobile-toggle'),nav=document.querySelector('.nav-links');
addEventListener('scroll',()=>header?.classList.toggle('scrolled',scrollY>8),{passive:true});
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');document.body.classList.toggle('menu-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');document.body.classList.remove('menu-open');toggle?.setAttribute('aria-expanded','false');if(toggle)toggle.textContent='☰'}));
document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.closest('.faq-item'),open=item.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));btn.querySelector('span:last-child').textContent=open?'−':'+'}));
const form=document.querySelector('#order-form');
form?.addEventListener('submit',async e=>{e.preventDefault();if(!form.reportValidity())return;const submit=form.querySelector('[type=submit]'),old=submit.textContent;submit.disabled=true;submit.textContent=requestedLanguage==='ru'?'Отправка…':requestedLanguage==='en'?'Sending…':'Wysyłanie…';try{const response=await fetch('/api/order',{method:'POST',body:new FormData(form)});if(!response.ok)throw new Error('send_failed');form.hidden=true;document.querySelector('.success')?.classList.add('show');document.querySelector('.success')?.focus()}catch{alert(requestedLanguage==='ru'?'Не удалось отправить. Попробуйте ещё раз.':requestedLanguage==='en'?'Could not send. Please try again.':'Nie udało się wysłać. Spróbuj ponownie.')}finally{submit.disabled=false;submit.textContent=old}});
const params=new URLSearchParams(location.search),service=params.get('service'),serviceField=document.querySelector('#service-context');if(service&&serviceField){serviceField.value=service;document.querySelector('#service-note').textContent='Wybrany obszar: '+service.replaceAll('-',' ')}
