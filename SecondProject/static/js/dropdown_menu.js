<script type="text/javascript">
$(document).ready(function() {
	$('.main-menu__item main-menu__item--first').bind('mouseover',openSubMenu);
	$('.main-menu__item main-menu__item--first').bind('mouseout',closeSubMenu);
function openSubMenu(){
	$(this).find('.sub-menu').css('visibility', 'visable');
};
function closeSubMenu(){
	$(this).find('.sub-menu').css('visibility', 'hidden');
};

});
</script>