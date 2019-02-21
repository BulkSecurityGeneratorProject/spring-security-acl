/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SpringSecurityAclTestModule } from '../../../test.module';
import { AclObjectIdentityDetailComponent } from 'app/entities/acl-object-identity/acl-object-identity-detail.component';
import { AclObjectIdentity } from 'app/shared/model/acl-object-identity.model';

describe('Component Tests', () => {
    describe('AclObjectIdentity Management Detail Component', () => {
        let comp: AclObjectIdentityDetailComponent;
        let fixture: ComponentFixture<AclObjectIdentityDetailComponent>;
        const route = ({ data: of({ acl_Object_Identity: new AclObjectIdentity(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SpringSecurityAclTestModule],
                declarations: [AclObjectIdentityDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(AclObjectIdentityDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(AclObjectIdentityDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.acl_Object_Identity).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
