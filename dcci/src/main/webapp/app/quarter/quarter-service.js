(function(){
	'use strict';
	
	angular.module('dcoiApp').factory('QuarterService', QuarterService);
	
	QuarterService.$inject = ['$http'];
	
	function QuarterService($http){
	    return {
			initQuarter : function() {
//				return $http({
//					url: '/newQuarter/init',
//					method: 'GET'
//				});
				return {
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
				};
			},
			createQuarter : function(quarterData) {
				return $http({
					url: '/newQuarter/create',
					method: 'POST',
					params: {fiscalQuarterReport: quarterData}
				});
			},
			saveQuarter : function(quarterData) {
				return $http({
					url: '',
					method: 'POST',
					params: {quarterData: quarterData}
				});
			},
			submitQuarter : function(quarterData) {
				return $http({
					url: '',
					method: 'POST',
					params: {quarterData: quarterData}
				});
			},
			exportQuarter : function(quarterData) {
				return $http({
					url: '',
					method: 'POST',
					params: {quarterData: quarterData}
				});
			},
			initDataCenter : function() {
//				return $http({
//					url: '/newDataCenter/init',
//					method: 'GET'
//				});
				return {
					name: '',
					id: '',
					city: '',
					state: '',
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
							name: 'OCIO',
							categories: {
								generalInfo: {},
								status: {},
								facilityInfo: {},
								serverInfo: {}
							}
						}
					],
				};
			},
			removeDataCenter : function(dataCenterID) {
				return $http({
					url: '',
					method: 'POST',
					params: {dataCenterID: dataCenterID}
				});
			},
			initComponentTab : function(quarterID, componentTabID) {
				return $http({
					url: '',
					method: 'POST',
					params: {quarterID: quarterID,
						componentTabID: componentTabID
					}
				});
			},
			viewAudit : function(categoryID) {
				return $http({
					url: '',
					method: 'POST',
					params: {categoryID: categoryID}
				});
			},
			validateCategory : function(dataCenterID, categoryDto) {
				return $http({
					url: '',
					method: 'POST',
					params: {
						dataCenterID: dataCenterID,
						categoryDto: categoryDto
					}
				});
			}
	    };
	}
})();