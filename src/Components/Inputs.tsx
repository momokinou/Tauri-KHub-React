import { Button, TextInput } from "@mantine/core";
import { GitHubLogoIcon, NotionLogoIcon } from "@radix-ui/react-icons";
import { invoke } from '@tauri-apps/api/tauri'
import { stringify } from "querystring";
import { fetch } from '@tauri-apps/api/http';

function CustomInput() {

    return (
        <>
        </>
    );

}


// async function getData() {
//     const response = await fetch('https://bato.to/chapter/1632251');
//     console.log(response);
// }

async function getData() {
    const response = invoke('get_request');
    console.log(response);
}

function WebsiteInput() {

    return (
        <>
            <TextInput
                icon={<GitHubLogoIcon/>}
                rightSection={<NotionLogoIcon/>}
                label="Tape moi ton site web"
            />
            {/* <Button onClick={() => invoke('get_request')}> */}
            <Button onClick={() => getData()}>
                Settings
            </Button>

        </>
    );

}

export default CustomInput;
export { WebsiteInput };