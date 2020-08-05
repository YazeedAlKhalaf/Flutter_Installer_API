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
      scripts: {
        append_to_path: {
          name: "Append To PATH",
          download_links: {
            windows:
              "https://gist.githubusercontent.com/YazeedAlKhalaf/fae357096390f54a768f091a35efea7f/raw/ee399fb14b7d11256870d58664761eef5d6c1945/append-to-path.bat",
            linux:
              "https://gist.githubusercontent.com/YazeedAlKhalaf/2e063e344b3f3f4bb99a79c601e17a13/raw/208936d814d2e755962f6a57f0dd1b02a8ef891e/append-to-path.sh",
            macos:
              "https://gist.githubusercontent.com/YazeedAlKhalaf/2e063e344b3f3f4bb99a79c601e17a13/raw/208936d814d2e755962f6a57f0dd1b02a8ef891e/append-to-path-zsh.sh",
          },
        },
        dist: {
          name: "Get Distro Name Script",
          download_links: {
            windows: "",
            linux:
              "https://gist.githubusercontent.com/YazeedAlKhalaf/d03c9bda0d2e3815b819d0ebccdac2e6/raw/bf357bcf5f367e9794458aa86687c48c6a596957/dist.sh",
            macos:
              "https://gist.githubusercontent.com/YazeedAlKhalaf/d03c9bda0d2e3815b819d0ebccdac2e6/raw/bf357bcf5f367e9794458aa86687c48c6a596957/dist.sh",
          },
        },
      },
    },
  });
};
