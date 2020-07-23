exports.getLatestReleases = function (req, res, next) {
  res.json({
    latest: {
      android_studio: {
        name: "Android Studio",
        version: "4.0.1",
        download_links: {
          windows:
            "https://redirector.gvt1.com/edgedl/android/studio/install/4.0.1.0/android-studio-ide-193.6626763-windows.exe",
          linux:
            "https://redirector.gvt1.com/edgedl/android/studio/ide-zips/4.0.1.0/android-studio-ide-193.6626763-linux.tar.gz",
          macos:
            "https://redirector.gvt1.com/edgedl/android/studio/install/4.0.1.0/android-studio-ide-193.6626763-mac.dmg",
        },
      },
      visual_studio_code: {
        name: "Visual Studio Code",
        version: "1.47",
        download_links: {
          windows: "https://aka.ms/win32-x64-user-stable",
          linux: "https://go.microsoft.com/fwlink/?LinkID=620884",
          macos: "https://go.microsoft.com/fwlink/?LinkID=620882",
        },
      },
      intellij_idea: {
        name: "IntelliJ IDEA",
        version: "2020.1.3",
        download_links: {
          windows: "https://download.jetbrains.com/idea/ideaIC-2020.1.3.exe",
          linux: "https://download.jetbrains.com/idea/ideaIC-2020.1.3.tar.gz",
          macos: "https://download.jetbrains.com/idea/ideaIC-2020.1.3.dmg",
        },
      },
    },
  });
};
