import React, {useState} from "react";
import {
    Alert,
    Box,
    Button, Collapse,
    colors,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField
} from "@mui/material";
import bg from '../images/bg.png'
import logo from '../images/logo192.png'
import '../css/style_login.css'
import {black, blue, red, pink, grey} from "@mui/material/colors";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';


function LoginForm({alertState,setAlertState}){
    const [selectedLabel,setSelectedLabel] = useState(1);

    function handleChange(e){
        setSelectedLabel(e);
    }

    function clickForget(e){
        setAlertState();
    }
    return (
        <form>
            <h2>欢迎登陆</h2>
            <div className="login-html">
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="user"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel sx={{color: selectedLabel == 1 ? blue[800] : grey}}
                                          onChange={(e) => handleChange(1)} className="tab" value="user"
                                          control={<Radio className="radio"/>} label="测评人员"/>
                        <FormControlLabel sx={{color: selectedLabel == 2 ? blue[800] : grey}}
                                          onChange={(e) => handleChange(2)} className="tab" value="admin"
                                          control={<Radio className="radio"/>} label="管理员"/>
                        <FormControlLabel sx={{color: selectedLabel == 3 ? blue[800] : grey}}
                                          onChange={(e) => handleChange(3)} className="tab" value="superadmin"
                                          control={<Radio className="radio"/>} label="超级管理员"/>
                    </RadioGroup>
                </FormControl>
                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                    <AccountCircleIcon color="primary" sx={{mr: 1, my: 0.5}}/>
                    <TextField size="small" fullWidth={true} id="username" label="请输入用户名" variant={"outlined"}/>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'flex-end', pt: 1.5}}>
                    <LockIcon color="primary" sx={{mr: 1, my: 0.5}}/>
                    <TextField size="small" fullWidth={true} id="username" label="请输入密码" variant={"outlined"}
                               type={"password"}/>
                </Box>
                <Box sx={{pt: 1.5}}>
                    <Button variant="contained">登录</Button>
                </Box>
                <a className="forget" onClick={clickForget}>忘记密码？</a>
            </div>
        </form>
    )
}


export default function LoginPanel(){
    const [alertState,setAlertState] = useState(false);
    function handleClickAlert(){
        setAlertState(false);
    }
    return(
        <div className="login-layout">
            <Collapse in={alertState}>
                <Alert severity="error" onClose={handleClickAlert}>
                    请联系管理员
                </Alert>
            </Collapse>
            <div className="top-layout">
                <img src={logo} alt="logo"/>
                <span>心理测评系统</span>
            </div>
            <div className="right-layout">
                <div className="login-form">
                    <div className="bg">
                        <img src={bg} alt="bg"/>
                    </div>
                    <LoginForm alertState={alertState} setAlertState={()=>setAlertState(true)}></LoginForm>
                </div>
            </div>
        </div>
    )
}

