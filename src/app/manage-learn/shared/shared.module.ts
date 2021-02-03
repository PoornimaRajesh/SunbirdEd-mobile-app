import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CamelToTitlePipe } from './pipe/camel-to-title.pipe';
import { UtilsService } from '../core/services/utils.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MultipleTypeInputComponent,
  AudioListComponent,
  CommonHeaderComponent,
  DateTypeInputComponent,
  FooterButtonsComponent,
  ImageUploadComponent,
  ItemListCardComponent,
  MatrixTypeInputComponent,
  PageQuestionsComponent,
  QuestionHeadingComponent,
  RadioTypeInputComponent,
  SliderTypeInputComponent,
  RemarksComponent,
  PopoverComponent,
  EntityfilterComponent,
  TextTypeInputComponent,
  ProgressBarComponent,
  NoDataComponent,
} from './components';
import { TranslateModule } from '@ngx-translate/core';
import { Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Media } from '@ionic-native/media/ngx';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { GetLabelsPipe } from './pipe/get-labels.pipe';
import { ScroreReportMenusComponent } from './components/scrore-report-menus/scrore-report-menus.component';
import { ReportsTextComponent } from './components/reports-text/reports-text.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { MatrixChartComponent } from './components/matrix-chart/matrix-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AttachmentComponent } from './components/attachment/attachment.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { CriteriaListComponent } from './components/criteria-list/criteria-list.component';
import { DownloadShareComponent } from './components/download-share/download-share.component';
import { GraphCircleComponent } from './components/graph-circle/graph-circle.component';
import { FilterModalComponent } from './components/filter-modal/filter-modal.component';
import { SubmissionActionsComponent } from './components/submission-actions/submission-actions.component';
import { ViewDetailComponent } from './components/view-detail/view-detail.component';
import { ScatterChartComponent } from './components/scatter-chart/scatter-chart.component';
import { StateModalComponent } from './components/state-modal/state-modal.component';
import { SearchPipe } from './pipe/search.pipe';
import { SurveyMsgComponent } from './components/survey-msg/survey-msg.component';

@NgModule({
  declarations: [
    CreateTaskComponent,
    MultipleTypeInputComponent,
    RadioTypeInputComponent,
    RemarksComponent,
    DateTypeInputComponent,
    AudioListComponent,
    FooterButtonsComponent,
    ImageUploadComponent,
    MatrixTypeInputComponent,
    PageQuestionsComponent,
    QuestionHeadingComponent,
    SliderTypeInputComponent,
    TextTypeInputComponent,
    CamelToTitlePipe,
    ItemListCardComponent,
    CommonHeaderComponent,
    EntityfilterComponent,
    PopoverComponent,
    ProgressBarComponent,
    GetLabelsPipe,
    ScroreReportMenusComponent,
    ReportsTextComponent,
    PieChartComponent,
    BarChartComponent,
    ScatterChartComponent,
    MatrixChartComponent,
    AttachmentComponent,
    QuestionListComponent,
    CriteriaListComponent,
    DownloadShareComponent,
    GraphCircleComponent,
    FilterModalComponent,
    SubmissionActionsComponent,
    ViewDetailComponent,
    NoDataComponent,
    StateModalComponent,
    SearchPipe,
    SurveyMsgComponent,
  ],

  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, TranslateModule, HighchartsChartModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    CreateTaskComponent,
    MultipleTypeInputComponent,
    RadioTypeInputComponent,
    RemarksComponent,
    DateTypeInputComponent,
    AudioListComponent,
    FooterButtonsComponent,
    ImageUploadComponent,
    MatrixTypeInputComponent,
    PageQuestionsComponent,
    QuestionHeadingComponent,
    SliderTypeInputComponent,
    CamelToTitlePipe,
    ItemListCardComponent,
    CommonHeaderComponent,
    EntityfilterComponent,
    PopoverComponent,
    TextTypeInputComponent,
    ProgressBarComponent,
    GetLabelsPipe,
    AttachmentComponent,
    ReportsTextComponent,
    PieChartComponent,
    BarChartComponent,
    ScatterChartComponent,
    MatrixChartComponent,
    QuestionListComponent,
    CriteriaListComponent,
    DownloadShareComponent,
    GraphCircleComponent,
    FilterModalComponent,
    SubmissionActionsComponent,
    ViewDetailComponent,
    NoDataComponent,
    StateModalComponent,
    SearchPipe,
    SurveyMsgComponent,
  ],
  providers: [
    Camera,
    ImagePicker,
    PhotoLibrary,
    FilePath,
    FileChooser,
    FileOpener,
    AndroidPermissions,
    Diagnostic,
    Media,
    CommonModule,
    HttpClientModule, //TODO:remove after api integration
    ReactiveFormsModule,
  ],
  entryComponents: [
    EntityfilterComponent,
    PopoverComponent,
    CreateTaskComponent,
    ScroreReportMenusComponent,
    QuestionListComponent,
    CriteriaListComponent,
    DownloadShareComponent,
    FilterModalComponent,
    SubmissionActionsComponent,
    ViewDetailComponent,
    StateModalComponent,
    SurveyMsgComponent,
  ],
})
export class SharedModule {}