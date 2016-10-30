export class navbar{
    checkNav: boolean;
    activate() {
        this.checkNav = (Lockr.get('UserInfo') as any); 
        console.log('this.nav',this.checkNav);
    }
}