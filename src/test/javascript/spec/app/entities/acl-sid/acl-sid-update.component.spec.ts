/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { SpringSecurityAclTestModule } from '../../../test.module';
import { Acl_SidUpdateComponent } from 'app/entities/acl-sid/acl-sid-update.component';
import { Acl_SidService } from 'app/entities/acl-sid/acl-sid.service';
import { Acl_Sid } from 'app/shared/model/acl-sid.model';

describe('Component Tests', () => {
    describe('AclSid Management Update Component', () => {
        let comp: Acl_SidUpdateComponent;
        let fixture: ComponentFixture<Acl_SidUpdateComponent>;
        let service: Acl_SidService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SpringSecurityAclTestModule],
                declarations: [Acl_SidUpdateComponent]
            })
                .overrideTemplate(Acl_SidUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(Acl_SidUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Acl_SidService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new Acl_Sid(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.acl_Sid = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new Acl_Sid();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.acl_Sid = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.create).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
        });
    });
});
