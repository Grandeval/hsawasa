const fs = require('fs');
const path = 'android/app/src/main/AndroidManifest.xml';
let content = fs.readFileSync(path, 'utf8');
const perms = `
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE_LOCATION" />
    <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
    <uses-permission android:name="android.permission.WAKE_LOCK" />
`;
if (!content.includes('ACCESS_BACKGROUND_LOCATION')) {
  content = content.replace('</manifest>', perms + '</manifest>');
  fs.writeFileSync(path, content);
  console.log('✅ Izin berhasil ditambahkan ke AndroidManifest.xml');
} else {
  console.log('ℹ️ Izin sudah ada, skip patch');
}
