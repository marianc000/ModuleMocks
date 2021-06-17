import getHomeView from './userView.js';
 
describe("homeView", function () {
    it("expected output of complex calculations", async function () {
        const view=await getHomeView();
        expect(view).toBe('Hello Mock' );
    });
});