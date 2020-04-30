var portfolioApp = angular.module('portfolioApp',[]);


portfolioApp.controller('GalleryListCtrl', function($scope) {
$scope.galleries =
    [
        { 'title':'Wiedeń',
        'when':'2011-01-20',
        'thumbnailUrl':'img/wieden2.jpg'
        },
        { 'title':'Wiedeń',
        'when':'2011-01-22',
        'thumbnailUrl':'img/wieden.jpg'
        },
        { 'title':'Moskwa',
        'when':'2013-02-25',
        'thumbnailUrl':'img/moskwa.jpg'
        },
        { 'title':'Berlin',
        'when':'2014-03-29',
        'thumbnailUrl':'img/berlin.jpg'
        },
        { 'title':'Berlin',
        'when':'2014-03-30',
        'thumbnailUrl':'img/berlin2.jpg'
        },
        { 'title':'Abu Dhabi',
        'when':'2017-04-22',
        'thumbnailUrl':'img/abu.jpg'
        }
    ];




    $scope.sortList =
    [
        {
            'label':'Alfabetycznie',
            'value':'title'
        },
        {
            'label':'Chronologicznie',
            'value':'when'
        },
        {
            'label':'Od Najnowszych',
            'value':'-when'
        },
    ];

    $scope.orderProp = $scope.sortList[0];
    $scope.galleries.length;
    $scope.galleries.sekcja = "Galeria zdjęć";
});
