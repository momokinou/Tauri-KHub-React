import { Button, TextInput } from "@mantine/core";
import { GitHubLogoIcon, NotionLogoIcon } from "@radix-ui/react-icons";
import { invoke } from '@tauri-apps/api/tauri'
import { stringify } from "querystring";

function CustomInput() {

    return (
        <>
        </>
    );

}

function WebsiteInput() {

    return (
        <>
            <TextInput
                icon={<GitHubLogoIcon/>}
                rightSection={<NotionLogoIcon/>}
                label="Tape moi ton site web"
            />
            <Button onClick={() => invoke('connect_to')}>
                Settings
            </Button>
        </>
    );

}

export default CustomInput;
export { WebsiteInput };