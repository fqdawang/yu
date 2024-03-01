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
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxMzExNFxcXFxEZXNrdG9wXFxcXGdpdGVlLXl1XFxcXFx1NTFFMFx1ODg0Q1x1NEVFM1x1NzgwMS15dVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMTMxMTRcXFxcRGVza3RvcFxcXFxnaXRlZS15dVxcXFxcdTUxRTBcdTg4NENcdTRFRTNcdTc4MDEteXVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzEzMTE0L0Rlc2t0b3AvZ2l0ZWUteXUvJUU1JTg3JUEwJUU4JUExJThDJUU0JUJCJUEzJUU3JUEwJTgxLXl1L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IFwiL3l1L1wiLCAvLyBcdTRFMEVnaXRodWJcdTc2ODRcdTRFRDNcdTVFOTNcdTU0MERcdTRFMDBcdTgxRjRcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6IFwiZG9jc1wiICAvLyBnaXRodWJcdTc2ODRcdThCQkVcdTdGNkVcdTYyMTBcdThGRDlcdTRFMkFcdTY1ODdcdTRFRjZcdTU5MzlcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVixTQUFTLGVBQWUsV0FBVztBQUV0WCxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFIaUwsSUFBTSwyQ0FBMkM7QUFNbFAsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUE7QUFBQSxFQUNWO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsRUFDTjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
