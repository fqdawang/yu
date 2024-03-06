// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/13114/Desktop/gitee-yu/%E5%87%A0%E8%A1%8C%E4%BB%A3%E7%A0%81-yu/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/13114/Desktop/gitee-yu/%E5%87%A0%E8%A1%8C%E4%BB%A3%E7%A0%81-yu/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/13114/Desktop/gitee-yu/%E5%87%A0%E8%A1%8C%E4%BB%A3%E7%A0%81-yu/vite.config.js";
var vite_config_default = defineConfig({
  base: "/yu/",
  // 与github的仓库名一致
  build: {
    outDir: "docs"
    // github的设置成这个文件夹
  },
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        globalVars: {
          // 全局变量
          mainColor: "red"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxMzExNFxcXFxEZXNrdG9wXFxcXGdpdGVlLXl1XFxcXFx1NTFFMFx1ODg0Q1x1NEVFM1x1NzgwMS15dVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMTMxMTRcXFxcRGVza3RvcFxcXFxnaXRlZS15dVxcXFxcdTUxRTBcdTg4NENcdTRFRTNcdTc4MDEteXVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzEzMTE0L0Rlc2t0b3AvZ2l0ZWUteXUvJUU1JTg3JUEwJUU4JUExJThDJUU0JUJCJUEzJUU3JUEwJTgxLXl1L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IFwiL3l1L1wiLCAvLyBcdTRFMEVnaXRodWJcdTc2ODRcdTRFRDNcdTVFOTNcdTU0MERcdTRFMDBcdTgxRjRcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6IFwiZG9jc1wiICAvLyBnaXRodWJcdTc2ODRcdThCQkVcdTdGNkVcdTYyMTBcdThGRDlcdTRFMkFcdTY1ODdcdTRFRjZcdTU5MzlcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9LFxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBsZXNzOiB7XG4gICAgICAgIG1hdGg6IFwiYWx3YXlzXCIsXG4gICAgICAgIGdsb2JhbFZhcnM6IHtcbiAgICAgICAgICAvLyBcdTUxNjhcdTVDNDBcdTUzRDhcdTkxQ0ZcbiAgICAgICAgICBtYWluQ29sb3I6IFwicmVkXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1WLFNBQVMsZUFBZSxXQUFXO0FBRXRYLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUhpTCxJQUFNLDJDQUEyQztBQU1sUCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUE7QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxFQUNOO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBO0FBQUEsVUFFVixXQUFXO0FBQUEsUUFDYjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
