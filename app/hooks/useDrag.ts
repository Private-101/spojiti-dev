/**
 * @file useDrag.ts
 * @author your name
 * @brief file description
 * @version 0.1
 * @date 2023-6-5
 * @copyright Copyright (c) 2023
 * Licensed under the XYZ license.
 */


/**
 * @brief 
 * 
 * A function that enables drag and drop functionality.
 *
 * @return {void} This function does not return a value.
 */
export default function useDrag(): void {
    const draggables = document.querySelectorAll<HTMLElement>('.task');
    const droppables = document.querySelectorAll<HTMLElement>('.swim-lane');
  
    draggables.forEach((task) => {
      task.addEventListener('dragstart', () => {
        task.classList.add('is-dragging');
      });
      task.addEventListener('dragend', () => {
        task.classList.remove('is-dragging');
      });
    });
  
    droppables.forEach((zone) => {
      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
  
        const bottomTask = insertAboveTask(zone, e.clientY);
        const curTask = document.querySelector('.is-dragging') as HTMLElement;
  
        if (!bottomTask) {
          zone.appendChild(curTask);
        } else {
          zone.insertBefore(curTask, bottomTask);
        }
      });
    });
  
    const insertAboveTask = (
      zone: HTMLElement,
      mouseY: number
    ): HTMLElement | null => {
      const els = zone.querySelectorAll<HTMLElement>('.task:not(.is-dragging)');
  
      let closestTask: HTMLElement | null = null;
      let closestOffset = Number.NEGATIVE_INFINITY;
  
      els.forEach((task) => {
        const { top } = task.getBoundingClientRect();
  
        const offset = mouseY - top;
  
        if (offset < 0 && offset > closestOffset) {
          closestOffset = offset;
          closestTask = task;
        }
      });
  
      return closestTask;
    };
  };
  
  
  