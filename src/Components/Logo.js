import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useStateValue } from '../ContextAPI/globalState';

const useStyles = makeStyles((theme)=>{
    return {
        logo:{
            width: '100px',
            height: '40px',
            objectFit:'cover',
            [theme.breakpoints.down('sm')]: {
               marginLeft: theme.spacing(-1)
            },
        }
    }
})


function Logo() {
    const classes = useStyles();
    const {darkMode } = useStateValue();

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={classes.logo} viewBox="-76.185 -28.34675 660.27 170.0805"><path d="M158.595 17.705a20.285 20.285 0 00-14.32-14.32C131.642 0 80.99 0 80.99 0S30.337 0 17.705 3.385a20.286 20.286 0 00-14.32 14.32C0 30.338 0 56.693 0 56.693S0 83.049 3.385 95.68A20.285 20.285 0 0017.705 110c12.632 3.386 63.285 3.386 63.285 3.386s50.652 0 63.285-3.386a20.284 20.284 0 0014.32-14.32c3.385-12.632 3.385-38.988 3.385-38.988s0-26.355-3.385-38.988" fill="red"/><path d="M64.792 80.99l42.082-24.297-42.082-24.297zm188.276 11.04c.887-2.314 1.332-6.098 1.332-11.35V58.556c0-5.097-.445-8.822-1.332-11.178-.888-2.355-2.452-3.533-4.69-3.533-2.163 0-3.69 1.178-4.577 3.533-.888 2.356-1.332 6.081-1.332 11.178V80.68c0 5.25.424 9.035 1.275 11.35.848 2.318 2.392 3.475 4.633 3.475 2.239 0 3.803-1.157 4.691-3.475zm-17.953 11.122c-3.207-2.16-5.486-5.52-6.835-10.079-1.352-4.554-2.027-10.617-2.027-18.185v-10.31c0-7.644.771-13.784 2.316-18.417 1.544-4.633 3.956-8.011 7.24-10.135 3.282-2.123 7.587-3.186 12.916-3.186 5.251 0 9.459 1.082 12.626 3.243 3.165 2.162 5.482 5.542 6.95 10.136 1.466 4.595 2.2 10.715 2.2 18.36v10.31c0 7.567-.714 13.65-2.142 18.243-1.43 4.595-3.747 7.955-6.951 10.077-3.205 2.124-7.548 3.186-13.03 3.186-5.64 0-10.06-1.082-13.263-3.243m248.053-57.981c-.81 1.005-1.352 2.646-1.621 4.923-.272 2.278-.404 5.734-.404 10.367v5.097h11.697V60.46c0-4.555-.155-8.011-.463-10.367-.309-2.355-.868-4.014-1.678-4.98-.812-.966-2.067-1.449-3.766-1.449-1.7 0-2.954.503-3.765 1.506zm-2.025 29.886v3.591c0 4.557.132 7.974.404 10.251.269 2.279.828 3.94 1.68 4.982.849 1.041 2.16 1.564 3.938 1.564 2.392 0 4.035-.927 4.923-2.781.887-1.853 1.37-4.942 1.447-9.268l13.785.812c.077.62.116 1.469.116 2.548 0 6.565-1.795 11.47-5.387 14.712-3.589 3.242-8.669 4.865-15.232 4.865-7.876 0-13.398-2.47-16.564-7.414-3.168-4.94-4.75-12.586-4.75-22.935V63.589c0-10.657 1.641-18.436 4.924-23.342 3.281-4.903 8.9-7.355 16.854-7.355 5.482 0 9.691 1.004 12.626 3.012 2.933 2.01 5 5.137 6.197 9.383 1.197 4.247 1.796 10.117 1.796 17.607v12.163h-26.757m-284.953-1.33l-18.187-65.68h15.869l6.37 29.77c1.623 7.339 2.82 13.594 3.591 18.766h.464c.54-3.706 1.738-9.922 3.591-18.65l6.603-29.886h15.869l-18.417 65.68v31.51h-15.754v-31.51M322.115 34.23v71.007h-12.511l-1.39-8.688h-.347c-3.399 6.564-8.496 9.845-15.291 9.845-4.71 0-8.185-1.543-10.425-4.633-2.24-3.087-3.359-7.915-3.359-14.48V34.23h15.985v52.126c0 3.168.348 5.426 1.043 6.776.695 1.353 1.853 2.027 3.475 2.027 1.39 0 2.722-.423 3.996-1.275 1.274-.849 2.22-1.928 2.838-3.241V34.229h15.986m81.995.001v71.007h-12.511l-1.391-8.688h-.345c-3.402 6.564-8.498 9.845-15.292 9.845-4.711 0-8.186-1.543-10.426-4.633-2.24-3.087-3.358-7.915-3.358-14.48V34.23h15.985v52.126c0 3.168.347 5.426 1.041 6.776.696 1.353 1.855 2.027 3.476 2.027 1.391 0 2.723-.423 3.996-1.275 1.275-.849 2.22-1.928 2.839-3.241V34.229h15.985" fill={darkMode ? '#fff' : '#000'}/><path d="M365.552 20.908h-15.87v84.329h-15.637v-84.33h-15.869V8.05h47.376v12.858m76.811 53.636c0 5.174-.215 9.229-.639 12.162-.424 2.937-1.139 5.021-2.143 6.255-1.004 1.236-2.357 1.854-4.053 1.854a7.404 7.404 0 01-3.65-.927c-1.12-.618-2.026-1.544-2.722-2.78V50.796c.54-1.93 1.467-3.513 2.78-4.749 1.313-1.234 2.74-1.853 4.285-1.853 1.623 0 2.876.637 3.766 1.91.886 1.275 1.505 3.418 1.853 6.43.348 3.011.523 7.297.523 12.857zm14.652-28.964c-.967-4.478-2.531-7.721-4.692-9.73-2.163-2.007-5.136-3.011-8.919-3.011-2.935 0-5.676.83-8.224 2.49a16.926 16.926 0 00-5.908 6.545h-.117l.001-37.416h-15.405v100.777h13.204l1.622-6.717h.347c1.235 2.393 3.088 4.285 5.56 5.675 2.47 1.39 5.213 2.085 8.225 2.085 5.404 0 9.382-2.491 11.931-7.471 2.548-4.982 3.823-12.76 3.823-23.341V64.23c0-7.953-.484-14.17-1.448-18.65" fill={darkMode ? '#fff' : '#000'}/></svg>
    )
}

export default Logo
