// vite.config.js
import { defineConfig, loadEnv } from "file:///C:/Users/HP/Desktop/New%20folder/MY/w/node_modules/vite/dist/node/index.js";
import tailwindcss from "file:///C:/Users/HP/Desktop/New%20folder/MY/w/node_modules/@tailwindcss/vite/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "C:\\Users\\HP\\Desktop\\New folder\\MY\\w";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const supabaseUrl = (env.VITE_SUPABASE_URL || "https://wttnvwpoqmbxryivcerf.supabase.co").replace(/\/$/, "");
  return {
    plugins: [tailwindcss()],
    server: {
      host: true,
      port: 5173,
      proxy: {
        // Local dev proxy avoids browser CORS preflight blocks against Supabase Edge Functions.
        "/_supabase/functions/v1": {
          target: supabaseUrl,
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/_supabase\/functions\/v1/, "/functions/v1")
        }
      }
    },
    build: {
      target: "esnext",
      rollupOptions: {
        external: [
          "@capacitor/core",
          "@capacitor/app",
          "@capacitor/browser",
          "@capacitor/camera",
          "@capacitor/filesystem",
          "@capacitor/haptics",
          "@capacitor/network",
          "@capacitor/preferences",
          "@capacitor/push-notifications",
          "@capacitor/splash-screen",
          "@capacitor/status-bar"
        ],
        input: {
          main: resolve(__vite_injected_original_dirname, "index.html"),
          details: resolve(__vite_injected_original_dirname, "details.html"),
          auth: resolve(__vite_injected_original_dirname, "auth.html"),
          payment: resolve(__vite_injected_original_dirname, "payment.html"),
          account: resolve(__vite_injected_original_dirname, "account.html"),
          checkout: resolve(__vite_injected_original_dirname, "checkout.html"),
          adminShipping: resolve(__vite_injected_original_dirname, "admin-shipping.html"),
          about: resolve(__vite_injected_original_dirname, "about.html"),
          contact: resolve(__vite_injected_original_dirname, "contact.html"),
          privacy: resolve(__vite_injected_original_dirname, "privacy.html"),
          terms: resolve(__vite_injected_original_dirname, "terms.html"),
          refundPolicy: resolve(__vite_injected_original_dirname, "refund-policy.html"),
          shippingPolicy: resolve(__vite_injected_original_dirname, "shipping-policy.html"),
          help: resolve(__vite_injected_original_dirname, "help.html"),
          adminAi: resolve(__vite_injected_original_dirname, "admin-ai.html"),
          adminAiSettings: resolve(__vite_injected_original_dirname, "admin-ai-settings.html"),
          admin: resolve(__vite_injected_original_dirname, "admin.html"),
          adminDomains: resolve(__vite_injected_original_dirname, "admin-domains.html")
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxIUFxcXFxEZXNrdG9wXFxcXE5ldyBmb2xkZXJcXFxcTVlcXFxcd1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcSFBcXFxcRGVza3RvcFxcXFxOZXcgZm9sZGVyXFxcXE1ZXFxcXHdcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0hQL0Rlc2t0b3AvTmV3JTIwZm9sZGVyL01ZL3cvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJztcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICdAdGFpbHdpbmRjc3Mvdml0ZSc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpLCAnJyk7XG4gIGNvbnN0IHN1cGFiYXNlVXJsID0gKGVudi5WSVRFX1NVUEFCQVNFX1VSTCB8fCAnaHR0cHM6Ly93dHRudndwb3FtYnhyeWl2Y2VyZi5zdXBhYmFzZS5jbycpLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3MoKV0sXG4gICAgc2VydmVyOiB7XG4gICAgICBob3N0OiB0cnVlLFxuICAgICAgcG9ydDogNTE3MyxcbiAgICAgIHByb3h5OiB7XG4gICAgICAgIC8vIExvY2FsIGRldiBwcm94eSBhdm9pZHMgYnJvd3NlciBDT1JTIHByZWZsaWdodCBibG9ja3MgYWdhaW5zdCBTdXBhYmFzZSBFZGdlIEZ1bmN0aW9ucy5cbiAgICAgICAgJy9fc3VwYWJhc2UvZnVuY3Rpb25zL3YxJzoge1xuICAgICAgICAgIHRhcmdldDogc3VwYWJhc2VVcmwsXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICAgIHNlY3VyZTogdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvX3N1cGFiYXNlXFwvZnVuY3Rpb25zXFwvdjEvLCAnL2Z1bmN0aW9ucy92MScpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBleHRlcm5hbDogW1xuICAgICAgICAgICdAY2FwYWNpdG9yL2NvcmUnLFxuICAgICAgICAgICdAY2FwYWNpdG9yL2FwcCcsXG4gICAgICAgICAgJ0BjYXBhY2l0b3IvYnJvd3NlcicsXG4gICAgICAgICAgJ0BjYXBhY2l0b3IvY2FtZXJhJyxcbiAgICAgICAgICAnQGNhcGFjaXRvci9maWxlc3lzdGVtJyxcbiAgICAgICAgICAnQGNhcGFjaXRvci9oYXB0aWNzJyxcbiAgICAgICAgICAnQGNhcGFjaXRvci9uZXR3b3JrJyxcbiAgICAgICAgICAnQGNhcGFjaXRvci9wcmVmZXJlbmNlcycsXG4gICAgICAgICAgJ0BjYXBhY2l0b3IvcHVzaC1ub3RpZmljYXRpb25zJyxcbiAgICAgICAgICAnQGNhcGFjaXRvci9zcGxhc2gtc2NyZWVuJyxcbiAgICAgICAgICAnQGNhcGFjaXRvci9zdGF0dXMtYmFyJyxcbiAgICAgICAgXSxcbiAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICBtYWluOiByZXNvbHZlKF9fZGlybmFtZSwgJ2luZGV4Lmh0bWwnKSxcbiAgICAgICAgICBkZXRhaWxzOiByZXNvbHZlKF9fZGlybmFtZSwgJ2RldGFpbHMuaHRtbCcpLFxuICAgICAgICAgIGF1dGg6IHJlc29sdmUoX19kaXJuYW1lLCAnYXV0aC5odG1sJyksXG4gICAgICAgICAgcGF5bWVudDogcmVzb2x2ZShfX2Rpcm5hbWUsICdwYXltZW50Lmh0bWwnKSxcbiAgICAgICAgICBhY2NvdW50OiByZXNvbHZlKF9fZGlybmFtZSwgJ2FjY291bnQuaHRtbCcpLFxuICAgICAgICAgIGNoZWNrb3V0OiByZXNvbHZlKF9fZGlybmFtZSwgJ2NoZWNrb3V0Lmh0bWwnKSxcbiAgICAgICAgICBhZG1pblNoaXBwaW5nOiByZXNvbHZlKF9fZGlybmFtZSwgJ2FkbWluLXNoaXBwaW5nLmh0bWwnKSxcbiAgICAgICAgICBhYm91dDogcmVzb2x2ZShfX2Rpcm5hbWUsICdhYm91dC5odG1sJyksXG4gICAgICAgICAgY29udGFjdDogcmVzb2x2ZShfX2Rpcm5hbWUsICdjb250YWN0Lmh0bWwnKSxcbiAgICAgICAgICBwcml2YWN5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3ByaXZhY3kuaHRtbCcpLFxuICAgICAgICAgIHRlcm1zOiByZXNvbHZlKF9fZGlybmFtZSwgJ3Rlcm1zLmh0bWwnKSxcbiAgICAgICAgICByZWZ1bmRQb2xpY3k6IHJlc29sdmUoX19kaXJuYW1lLCAncmVmdW5kLXBvbGljeS5odG1sJyksXG4gICAgICAgICAgc2hpcHBpbmdQb2xpY3k6IHJlc29sdmUoX19kaXJuYW1lLCAnc2hpcHBpbmctcG9saWN5Lmh0bWwnKSxcbiAgICAgICAgICBoZWxwOiByZXNvbHZlKF9fZGlybmFtZSwgJ2hlbHAuaHRtbCcpLFxuICAgICAgICAgIGFkbWluQWk6IHJlc29sdmUoX19kaXJuYW1lLCAnYWRtaW4tYWkuaHRtbCcpLFxuICAgICAgICAgIGFkbWluQWlTZXR0aW5nczogcmVzb2x2ZShfX2Rpcm5hbWUsICdhZG1pbi1haS1zZXR0aW5ncy5odG1sJyksXG4gICAgICAgICAgYWRtaW46IHJlc29sdmUoX19kaXJuYW1lLCAnYWRtaW4uaHRtbCcpLFxuICAgICAgICAgIGFkbWluRG9tYWluczogcmVzb2x2ZShfX2Rpcm5hbWUsICdhZG1pbi1kb21haW5zLmh0bWwnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyUyxTQUFTLGNBQWMsZUFBZTtBQUNqVixPQUFPLGlCQUFpQjtBQUN4QixTQUFTLGVBQWU7QUFGeEIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsUUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksR0FBRyxFQUFFO0FBQzNDLFFBQU0sZUFBZSxJQUFJLHFCQUFxQiw0Q0FBNEMsUUFBUSxPQUFPLEVBQUU7QUFFM0csU0FBTztBQUFBLElBQ0wsU0FBUyxDQUFDLFlBQVksQ0FBQztBQUFBLElBQ3ZCLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQTtBQUFBLFFBRUwsMkJBQTJCO0FBQUEsVUFDekIsUUFBUTtBQUFBLFVBQ1IsY0FBYztBQUFBLFVBQ2QsUUFBUTtBQUFBLFVBQ1IsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLCtCQUErQixlQUFlO0FBQUEsUUFDaEY7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsZUFBZTtBQUFBLFFBQ2IsVUFBVTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsT0FBTztBQUFBLFVBQ0wsTUFBTSxRQUFRLGtDQUFXLFlBQVk7QUFBQSxVQUNyQyxTQUFTLFFBQVEsa0NBQVcsY0FBYztBQUFBLFVBQzFDLE1BQU0sUUFBUSxrQ0FBVyxXQUFXO0FBQUEsVUFDcEMsU0FBUyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxVQUMxQyxTQUFTLFFBQVEsa0NBQVcsY0FBYztBQUFBLFVBQzFDLFVBQVUsUUFBUSxrQ0FBVyxlQUFlO0FBQUEsVUFDNUMsZUFBZSxRQUFRLGtDQUFXLHFCQUFxQjtBQUFBLFVBQ3ZELE9BQU8sUUFBUSxrQ0FBVyxZQUFZO0FBQUEsVUFDdEMsU0FBUyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxVQUMxQyxTQUFTLFFBQVEsa0NBQVcsY0FBYztBQUFBLFVBQzFDLE9BQU8sUUFBUSxrQ0FBVyxZQUFZO0FBQUEsVUFDdEMsY0FBYyxRQUFRLGtDQUFXLG9CQUFvQjtBQUFBLFVBQ3JELGdCQUFnQixRQUFRLGtDQUFXLHNCQUFzQjtBQUFBLFVBQ3pELE1BQU0sUUFBUSxrQ0FBVyxXQUFXO0FBQUEsVUFDcEMsU0FBUyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxVQUMzQyxpQkFBaUIsUUFBUSxrQ0FBVyx3QkFBd0I7QUFBQSxVQUM1RCxPQUFPLFFBQVEsa0NBQVcsWUFBWTtBQUFBLFVBQ3RDLGNBQWMsUUFBUSxrQ0FBVyxvQkFBb0I7QUFBQSxRQUN2RDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
