///<reference path="DataUtil.ts"/>
/**
 * Created by Chin on 08-Apr-17.
 */
var PersonaListController = /** @class */ (function () {
    function PersonaListController($scope) {
        this.$scope = $scope;
        $scope.fullPersonaList = fullPersonaList;
        $scope.changeOwn = this.changeOwn;
        // set the default sort param
        $scope.sortBy = 'level';
        $scope.sortReverse = false;
        $scope.sortFunc = this.getSortValue.bind(this);
    }
    PersonaListController.prototype.getSortValue = function (item) {
        var sortBy = this.$scope.sortBy;
        if (sortBy === "arcana") {
            return item.arcana + (item.level >= 10 ? item.level : ("0" + item.level));
        }
        else {
            return item[sortBy];
        }
    };
    PersonaListController.prototype.changeOwn = function (evt, persona) {
        var key = "owns ".concat(persona.name);
        if (evt.target.checked) {
            localStorage[key] = "1";
        }
        else {
            localStorage.removeItem(key);
        }
    };
    return PersonaListController;
}());
