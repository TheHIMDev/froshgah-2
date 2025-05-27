🚀 راهنمای راه‌اندازی پروژه Froshgah-2
<br></br>
پیش‌نیازها
<br></br>
نصب Node.js و npm
<br></br>
دسترسی به خط فرمان (Terminal)

مراحل اجرا
1. کلون کردن پروژه
bash <br></br>
git clone https://github.com/TheHIMDev/froshgah-2.git <br></br>
cd froshgah-2 <br></br>
2. نصب وابستگی‌ها <br></br>
bash <br></br>
npm install <br></br>
این دستور، تمام پکیج‌های موردنیاز پروژه را نصب می‌کند. <br></br>

3. راه‌اندازی سرور فیک (json-server) <br></br>
bash <br></br>
npx json-server data/db.json -p 8001 <br></br>
این دستور یک سرور REST API فیک روی پورت ۸۰۰۱ با داده‌های موجود در data/db.json اجرا می‌کند. <br></br>

حتماً این ترمینال را باز نگه دارید. <br></br>

این دستور پروژه را در حالت توسعه (development) اجرا می‌کند. <br></br>

معمولاً سایت روی آدرس http://localhost:5173 یا مشابه آن بالا می‌آید. <br></br>

نکات مهم <br></br>
مطمئن شوید که هر دو سرور (json-server و سرور اصلی پروژه) همزمان اجرا می‌شوند. <br></br>

اگر پورت ۸۰۰۱ آزاد نیست، می‌توانید شماره پورت را تغییر دهید. <br></br>

برای مشاهده داده‌های فیک، می‌توانید به آدرس http://localhost:8001 مراجعه کنید. <br></br>

دستورات کاربردی <br></br>
دستور	توضیح <br></br>
npm install	 <br></br>
npx json-server data/db.json -p 8001 <br></br>	
npm run dev <br></br>	
سوال یا مشکل؟ <br></br>
در صورت بروز هرگونه مشکل، Issue جدید در ریپازیتوری گیت‌هاب ثبت کنید. <br></br>
