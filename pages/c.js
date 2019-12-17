  
import React from 'react'
import Link from 'next/link'
import { Button, ButtonGroup, AnchorButton, Tab, Tabs, Menu, MenuItem, MenuDivider, Popover, Position } from "@blueprintjs/core";
import DefaultLayout from '../src/layouts/default';

export default () => {
    const exampleMenu = (
        <Menu>
            <MenuItem icon="graph" text="Graph" />
            <MenuItem icon="map" text="Map" />
            <MenuItem icon="th" text="Table" shouldDismissPopover={false} />
            <MenuItem icon="zoom-to-fit" text="Nucleus" disabled={true} />
            <MenuDivider />
            <MenuItem icon="cog" text="Settings...">
                <MenuItem icon="add" text="Add new application" disabled={true} />
                <MenuItem icon="remove" text="Remove application" />
            </MenuItem>
        </Menu>
    );
    return (
        <DefaultLayout>
            {'[THIS IS PLACE HOLDER FOR CMS CONTENT]'}
            <Button icon="log-in" minimal={true} intent="success" text="@(Yay ! This is react)" onClick={()=>{}} /><br/>
            <Button icon="log-in" minimal={false} intent="primary" text="@(Yay ! This is react)" onClick={()=>{}} /><br/>
            <Button icon="log-in" minimal={false} intent="success" text="@(Yay ! This is react)" onClick={()=>{}} /><br/>
            <Button icon="log-in" minimal={false} intent="warning" text="@(Yay ! This is react)" onClick={()=>{}} /><br/>
            <Button icon="log-in" minimal={false} intent="danger" text="@(Yay ! This is react)" onClick={()=>{}} /><br/>
            <Popover content={exampleMenu} position={Position.RIGHT_BOTTOM}>
                <Button icon="share" text="Open in..." />
            </Popover>
            <Menu>
                <MenuItem text="Submenu">
                    <MenuItem text="Child one" />
                    <MenuItem text="Child two" />
                    <MenuItem text="Child three" />
                </MenuItem>
            </Menu>
        </DefaultLayout>
    )
}

