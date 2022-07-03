#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use reqwest::header::USER_AGENT;

#[tauri::command]
async fn get_request() -> Result<(), String> {
  let user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:77.0) Gecko/20100101 Firefox/78.0$userAgentRandomizer";
  let url = "https://bato.to/series/89188/ooh-la-la";
  let client = reqwest::Client::new();
  let response = client
    .get(url)
    .header(USER_AGENT, user_agent)
    .send()
    .await
    .unwrap()
    .text()
    .await
    .or(Err(format!("Failed to GET from '{}'", &url)))?;


    println!("{:#?}", response);

    Ok(())
}

fn main() {
  let context = tauri::generate_context!();
  tauri::Builder::default()
  .invoke_handler(tauri::generate_handler![
    get_request
  ])
    .menu(if cfg!(target_os = "macos") {
      tauri::Menu::os_default(&context.package_info().name)
    } else {
      tauri::Menu::default()
    })
    .run(context)
    .expect("error while running tauri application");
}
