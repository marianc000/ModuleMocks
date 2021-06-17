import getHomeView from './userView.js';
 
describe("homeView", function () {
    it("returns some content, but unpredictable depending on REST resource", async function () {
        const view=await getHomeView();
        expect(view).toBeDefined( );
    });
});