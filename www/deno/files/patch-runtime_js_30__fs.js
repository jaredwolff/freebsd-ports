--- runtime/js/30_fs.js.orig	2022-07-08 08:14:40 UTC
+++ runtime/js/30_fs.js
@@ -178,7 +178,7 @@
   }
 
   function parseFileInfo(response) {
-    const unix = build.os === "darwin" || build.os === "linux";
+    const unix = build.os === "darwin" || build.os === "freebsd" || build.os === "linux";
     return {
       isFile: response.isFile,
       isDirectory: response.isDirectory,
