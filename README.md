Bright and Dark Themes in React
In this example, the class "dark" is added to the body using the classnames library, and it changes the application theme.
To handle color changes in CSS, variables with initial colors are modified, and the elements inside the page are assigned those colors. When the "dark" class is added to the body, these variables are overwritten, and the colors change.
Furthermore, to prevent changes when redirecting or refreshing the page, the theme value is stored using localStorage. When the page is rendered again, it reads the value from localStorage and applies it.

تم‌های روشن و تاریک در ری‌اکت
در این مثال، با استفاده از کتابخانه classnames، کلاس "dark" به بدنه (body) اضافه می‌شود و تم برنامه تغییر می‌کند.
برای مدیریت تغییرات رنگ در CSS، متغیرهایی با رنگ‌های اولیه تغییر می‌کنند و المان‌های داخل صفحه با آن رنگ‌ها تعیین می‌شوند. وقتی کلاس "dark" به بدنه اضافه می‌شود، این متغیرها بازنویسی می‌شوند و رنگ‌ها تغییر می‌کنند.
علاوه بر این، برای جلوگیری از تغییرات در هنگام هدایت (ریدایرکت) یا بازنشانی (رفرش) صفحه، مقدار تم را با استفاده از localStorage ذخیره می‌کنیم و هنگام رندر مجدد صفحه، آن را از localStorage می‌خوانیم و اعمال می‌کنیم.