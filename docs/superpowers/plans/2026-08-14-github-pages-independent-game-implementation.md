# برنامهٔ اجرای انتقال مستقل GitHub Pages

## مرحله ۱: ایجاد مرز استاتیک قابل‌ساخت

1. یک پیکربندی build مستقل برای GitHub Pages اضافه شود که `base` آن `/shadows-of-the-city/` باشد و هیچ plugin یا runtime وابسته به Manus وارد خروجی production نکند.
2. routing برنامه به hash routing تبدیل شود تا `#/play`، `#/codex`، `#/album`، `#/settings` و `#/admin` در refresh به ۴۰۴ نرسند.
3. provider سراسری tRPC/Manus OAuth از نقطهٔ ورود عمومی حذف و با provider دادهٔ Supabase جایگزین شود.

## مرحله ۲: انتقال دارایی‌ها و روایت عمومی

1. تصاویر ۴۹ صحنه، شیت‌های ۱۲ شخصیت و فونت‌های فارسی به درخت استاتیک version-controlled منتقل شوند.
2. همهٔ ارجاع‌های `/manus-storage/...` با URLهایی که نسبت به base path Vite کار می‌کنند جایگزین شوند.
3. داستان انگلیسی و فارسی، کدکس و آلبوم در bundle استاتیک باقی بمانند؛ override فارسی منتشرشده در زمان اجرا از Supabase دریافت شود.

## مرحله ۳: تقویت ذخیرهٔ محلی و تجربهٔ ادامه

1. مدل ذخیرهٔ مرورگر به نسخهٔ جدید ارتقا پیدا کند و timestamp، درصد پیشرفت و اطلاعات نمایشی آخرین گره را نگه دارد.
2. Home یک کارت Continue قابل‌مشاهده با آخرین زمان بازی، نام صحنه و درصد پیشرفت نمایش دهد.
3. سازگاری با ذخیرهٔ نسخهٔ اول، دادهٔ خراب و شروع تازه تست شود. هیچ داده‌ای از save به backend ارسال نشود.

## مرحله ۴: adapter داده و endpointهای Supabase

1. یک client عمومی Supabase تنها با anon key و RLS مناسب ایجاد شود.
2. Edge Functions برای login اختصاصی مالک، session، dashboard، محتوای منتشرشده، override فارسی، مدیریت صدا و telemetry پیاده‌سازی یا منتقل شوند.
3. service-role key، hash رمز و راز session فقط در secrets Supabase باقی بمانند.
4. Admin UI به adapter جدید متصل شود و رفتار reset override، انتشار فوری و logout با session جدید پوشش داده شود.

## مرحله ۵: انتشار GitHub Pages

1. workflow GitHub Actions برای نصب pnpm، اجرای test/check/build و deploy artifact Pages اضافه شود.
2. source واقعی پروژه، workflow و دارایی‌ها در repository عمومی قرار گیرند؛ ZIP تنها archive مکمل باقی بماند.
3. Pages به GitHub Actions متصل شود و deploy روی push به `main` فعال گردد.

## مرحله ۶: اعتبارسنجی و تحویل

1. Vitest برای migration ذخیره، hash routes، دادهٔ استاتیک و adapter Supabase اجرا شود.
2. build استاتیک local با base path repository بررسی شود.
3. مرورگر مسیر ریشه، `#/play`، refresh، Continue و زبان فارسی را بررسی کند.
4. ورود ادمین، ویرایش override فارسی و telemetry ناشناس با Supabase اعتبارسنجی شوند.
5. پس از موفقیت، checkpoint ثبت و URL مستقل GitHub Pages تحویل شود.
