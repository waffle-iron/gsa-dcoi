describe('dcoiApp', function() {
    	beforeEach(angular.mock.module('dcoiApp'));
	describe("QuarterController", function() {
	    var qc, httpBackend;
	    
	    beforeEach(angular.mock.inject(function($controller, $httpBackend) {
			httpBackend = $httpBackend;
			httpBackend.when("GET", "/newQuarter/init").respond({
			    'quarterData': {
					fiscalQuarter: 'Q3',
					fiscalYear: '2016',
					regions: {
						newEngland: {
							name: 'New England',
							dataCenters: [
								{
									name: 'Data Center 1 Name',
									id: 'Data Center 1 ID',
									city: 'Data Center 1 City',
									state: 'Data Center 1 State',
									components: [
										{
											name: 'PBS',
											categories: {
												generalInfo: {},
												status: {},
												facilityInfo: {},
												serverInfo: {}
											}
										},
										{
											name: 'FAS',
											categories: {
												generalInfo: {},
												status: {},
												facilityInfo: {},
												serverInfo: {}
											}
										}
									],
								},
								{
									name: 'Data Center 2 Name',
									id: 'Data Center 2 ID',
									city: 'Data Center 2 City',
									state: 'Data Center 2 State',
									components: [
										{
											name: 'PBS',
											categories: {
												generalInfo: {},
												status: {},
												facilityInfo: {},
												serverInfo: {}
											}
										},
										{
											name: 'FAS',
											categories: {
												generalInfo: {},
												status: {},
												facilityInfo: {},
												serverInfo: {}
											}
										}
									],
								}
							],
						},
						northeastAndCaribbean: {
							name: 'Northeast and Caribbean',
							dataCenters: [
								{
									name: 'Data Center 3 Name',
									id: 'Data Center 3 ID',
									city: 'Data Center 3 City',
									state: 'Data Center 3 State',
									components: [
										{
											name: 'PBS',
											categories: {
												generalInfo: {},
												status: {},
												facilityInfo: {},
												serverInfo: {}
											}
										},
										{
											name: 'FAS',
											categories: {
												generalInfo: {},
												status: {},
												facilityInfo: {},
												serverInfo: {}
											}
										},
										{
											name: 'OICO',
											categories: {
												generalInfo: {},
												status: {},
												facilityInfo: {},
												serverInfo: {}
											}
										}
									],
								},
								{
									name: 'Data Center 4 Name',
									id: 'Data Center 4 ID',
									city: 'Data Center 4 City',
									state: 'Data Center 4 State',
									components: [
										{
											name: 'PBS',
											categories: {
												generalInfo: {},
												status: {},
												facilityInfo: {},
												serverInfo: {}
											}
										},
										{
											name: 'FAS',
											categories: {
												generalInfo: {},
												status: {},
												facilityInfo: {},
												serverInfo: {}
											}
										}
									],
								}
							],
						},
						midAtlantic: {
							name: "Mid-Atlantic",
							dataCenters: {},
						},
						southeastSunbelt: {
							name: "Southeast Sunbelt",
							dataCenters: {},
						},
						greatLakes: {
							name: "Great Lakes",
							dataCenters: {},
						},
						heartland: {
							name: "Heartland",
							dataCenters: {},
						},
						greaterSouthwest: {
							name: "Greater Southwest",
							dataCenters: {},
						},
						rockyMountain: {
							name: "Rocky Mountain",
							dataCenters: {},
						},
						pacificRim: {
							name: "Pacific Rim",
							dataCenters: {},
						},
						northwestArctic: {
							name: "Northwest/Arctic",
							dataCenters: {},
						},
						nationalCapital: {
							name: "National Capital",
							dataCenters: {},
						},
						cloud: {
							name: "Cloud",
							dataCenters: {},
						}
					}
				}
			});
			
	    	qc = $controller("QuarterController", {
	    		quarterData: {}
	    	});
			httpBackend.expectGET('/newQuarter/init');
			qc.initQuarterData();
	    	httpBackend.flush();
	    }));
	    
	    
	    it('verify quarter data', function() {
			expect(qc.quarterData.fiscalQuarter).toBe('Q3');
	    });

	});
});