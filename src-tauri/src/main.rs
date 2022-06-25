#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::Manager;
use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};
use tauri::api::{shell};

#[tauri::command]
fn connect_to() {
  println!("string: ahah");
}


fn generate_menu() -> Menu {
  let discord = CustomMenuItem::new("discord".to_string(), "Discord");
  let github = CustomMenuItem::new("github".to_string(), "Github");
  let submenu = Submenu::new("Link", Menu::new().add_item(discord).add_item(github));
  let menu = Menu::new()
    .add_native_item(MenuItem::ShowAll)
    .add_submenu(submenu);
  return menu;
}

fn main() {
  let menu = generate_menu();

  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
      test,
      connect_to
    ])
    .menu(menu)
    .on_menu_event(|event| {
      match event.menu_item_id() {
        // To open a link, you need the dependency 'open' in your Cargo.toml. With this, you can open a link in the default browser.
        // This method requires a "return" so it returns a warning at startup.
        "discord" => {
          open::that("https://discord.gg/E3Xxcv3Hjn");
        }
        // Alternatively, you can use the shell API to open a link. you need to add "use tauri::api::{shell};" to your code.
        "github" => {
          shell::open(&event.window().shell_scope(), "https://github.com/momokinou", None).unwrap();
        }
        _ => {}
      }
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn test() {
  print!("Hello World!")
}