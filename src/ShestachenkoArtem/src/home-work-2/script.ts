((): void => {

    type CoordsGetter = (elem: HTMLElement) => Coords;
    type Coords = {
        left: number;
        top: number;
    };

    const sliderElem: HTMLElement | null = document.getElementById('slider');

    if (sliderElem === null) {
        return;
    }

    if (sliderElem.children.length === 0) {
        return;
    }

    const thumbElem: HTMLElement = sliderElem.children[0] as HTMLElement;

    const onMouseDown: EventListener = (e: Event): void => {
        const thumbCoords: Coords = getCoords(thumbElem);
        const shiftX: number = (e as MouseEvent).pageX - thumbCoords.left;
        const sliderCoords: Coords = getCoords(sliderElem);

        const onMouseMove: EventListener  = (evt: Event): void => {
            let newLeft: number = (evt as MouseEvent).pageX - shiftX - sliderCoords.left;

            if (newLeft < 0) {
                newLeft = 0;
            }

            const rightEdge: number = sliderElem.offsetWidth - thumbElem.offsetWidth;

            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }

            thumbElem.style.left = newLeft + 'px';
        };

        const onMouseUp: EventListener = (): void => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        return;
    };

    const onDragStart: EventListener  = (e: Event): void => {
        e.preventDefault();
    };

    thumbElem.addEventListener('mousedown', onMouseDown);
    thumbElem.addEventListener('dragstart', onDragStart);

    const getCoords: CoordsGetter = (elem: HTMLElement): Coords => {
        const box: ClientRect = elem.getBoundingClientRect();

        return {
            left: box.left + pageXOffset,
            top: box.top + pageYOffset,
        };
    };
})();
