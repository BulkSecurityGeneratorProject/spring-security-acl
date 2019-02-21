/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { SpringSecurityAclTestModule } from '../../../test.module';
import { Acl_SidDeleteDialogComponent } from 'app/entities/acl-sid/acl-sid-delete-dialog.component';
import { Acl_SidService } from 'app/entities/acl-sid/acl-sid.service';

describe('Component Tests', () => {
    describe('AclSid Management Delete Component', () => {
        let comp: Acl_SidDeleteDialogComponent;
        let fixture: ComponentFixture<Acl_SidDeleteDialogComponent>;
        let service: Acl_SidService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SpringSecurityAclTestModule],
                declarations: [Acl_SidDeleteDialogComponent]
            })
                .overrideTemplate(Acl_SidDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(Acl_SidDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Acl_SidService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
