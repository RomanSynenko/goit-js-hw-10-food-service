const refs = {
    checkboxRef: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
};
const { checkboxRef, body } = refs;
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;
const changeTheme = () => {
    const switchTheme = checkboxRef.checked;
    switchTheme ? addTheme() : deleteTheme();
    console.log(switchTheme);
};
const addTheme = () => {
    checkboxRef.checked = true;
    body.classList.add(DARK);
    body.classList.replace(LIGHT, DARK);
    localStorage.setItem('Theme', DARK)
};
const deleteTheme = () => {
    body.classList.replace(DARK, LIGHT);
    localStorage.setItem('Theme', LIGHT);
};
const localStorageReader = () => {
    const saveTheme = localStorage.getItem('Theme');
    saveTheme === DARK ? addTheme() : deleteTheme();
}
localStorageReader()
checkboxRef.addEventListener('change', changeTheme);