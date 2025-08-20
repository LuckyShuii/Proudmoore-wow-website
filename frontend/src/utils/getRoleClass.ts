// @format is either 'chip' or 'text'
export const getRoleClass = (code: string, format: string) => {
    switch (code) {
        case 'ADMIN':
            return format === 'chip' ? 'admin-chip' : 'admin-text';
        case 'DEV':
            return format === 'chip' ? 'dev-chip' : 'dev-text';
        case 'SMM':
            return format === 'chip' ? 'smm-chip' : 'smm-text';
        case 'CM':
            return format === 'chip' ? 'cm-chip' : 'cm-text';
        case 'HGM':
            return format === 'chip' ? 'hgm-chip' : 'hgm-text';
        case 'TRANSLATOR':
            return format === 'chip' ? 'translator-chip' : 'translator-text';
        default:
            return '';
    }
}