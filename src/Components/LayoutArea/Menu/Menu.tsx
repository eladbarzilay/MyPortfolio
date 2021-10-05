
import { Box, List, Divider, Button, Drawer } from '@material-ui/core';
import * as React from 'react';
import { NavLink } from 'react-router-dom';


import "./Menu.css";

type Anchor = 'left';

export default function Menu() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: 170 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>

                <br />
                <br />
                <br />
                <br />
                <br />
                {DefaultMenu()}

            </List>
            <Divider />

        </Box>
    );

    return (
        <div className="mebutton">

            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button className="menubutton" onClick={toggleDrawer(anchor, true)}>Menu</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}





function DefaultMenu() {
    return (<div>
        <h2>Default Menu</h2>
        <NavLink to='/home' exact>Home</NavLink>
        <br />
        <NavLink to='/contactMe' exact>Contact Me</NavLink>
        <br />
        <NavLink to='/about' exact>About</NavLink>
    </div>)
}



